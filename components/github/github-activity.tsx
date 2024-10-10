import React, { useEffect, useState } from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import styled from 'styled-components'

interface GitHubContribution {
  date: string
  count: number
}

interface GitHubContributionsProps {
  username: string
}

const Container = styled.div`
  background-color: white;
  color: black;
  padding: 1.5rem;
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    color: white;
  }
`

const Heading = styled.h3`
  padding-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`

const GitHubContributions: React.FC<GitHubContributionsProps> = ({ username }) => {
  const [contributions, setContributions] = useState<GitHubContribution[]>([])

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/events/public`)
        const data = await response.json()

        const contributionsData: Record<string, number> = {}

        data.forEach((event: any) => {
          const date = event.created_at.split('T')[0]
          contributionsData[date] = (contributionsData[date] || 0) + 1
        })

        const formattedData = Object.keys(contributionsData).map(date => ({
          date,
          count: contributionsData[(date)],
        }))

        setContributions(formattedData)
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error)
      }
    }

    fetchContributions()
  }, [username])

  return (
    <Container>
      <Heading>GitHub Contributions</Heading>
      <CalendarHeatmap
        startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
        endDate={new Date()}
        values={contributions}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty'
          }
          return `color-scale-${Math.min(value.count, 4)}`
        }}
        showWeekdayLabels
        tooltipDataAttrs={(value) => {
          return {
            'data-tip': `${value.date}: ${value.count} contributions`,
          }
        }}
      />
      <style jsx global>{`
        .react-calendar-heatmap .color-empty {
          fill: #ebedf0;
        }

        .react-calendar-heatmap .color-scale-1 {
          fill: #c6e48b;
        }

        .react-calendar-heatmap .color-scale-2 {
          fill: #7bc96f;
        }

        .react-calendar-heatmap .color-scale-3 {
          fill: #239a3b;
        }

        .react-calendar-heatmap .color-scale-4 {
          fill: #196127;
        }

        .react-calendar-heatmap text {
          fill: #767676;
          font-size: 10px;
        }

        @media (prefers-color-scheme: dark) {
          .react-calendar-heatmap .color-empty {
            fill: #444c56;
          }

          .react-calendar-heatmap .color-scale-1 {
            fill: #2b6cb0;
          }

          .react-calendar-heatmap .color-scale-2 {
            fill: #2c5282;
          }

          .react-calendar-heatmap .color-scale-3 {
            fill: #2a4365;
          }

          .react-calendar-heatmap .color-scale-4 {
            fill: #1a365d;
          }

          .react-calendar-heatmap text {
            fill: #adbac7;
          }
        }
      `}</style>
    </Container>
  )
}

export default GitHubContributions