"use client"

import { useState, useEffect } from "react"
import { getJobs } from "@/lib/jobs"
import { JobCard } from "@/components/job-card"
import { useSearchParams } from "next/navigation"
import type { Job } from "@/types/job"

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()

  const location = searchParams.get("location")
  const tag = searchParams.get("tag")

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true)
      try {
        const allJobs = await getJobs()

        // Apply filters if they exist
        let filteredJobs = [...allJobs]

        if (location) {
          filteredJobs = filteredJobs.filter((job) => job.location.toLowerCase().includes(location.toLowerCase()))
        }

        if (tag) {
          filteredJobs = filteredJobs.filter((job) => job.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
        }

        setJobs(filteredJobs)
      } catch (error) {
        console.error("Error fetching jobs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [location, tag])

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="rounded-lg border p-6 animate-pulse">
            <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-muted rounded w-1/4"></div>
          </div>
        ))}
      </div>
    )
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No jobs found</h3>
        <p className="text-muted-foreground mt-1">Try adjusting your filters</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">{jobs.length} jobs found</p>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

