"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

// Common job tags for filtering
const commonTags = [
  "Remote",
  "On-site",
  "Hybrid",
  "Full-Time",
  "Part-Time",
  "Internship",
  "Entry-Level",
  "JavaScript",
  "React",
  "TypeScript",
]

export function JobFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [location, setLocation] = useState(searchParams.get("location") || "")
  const [selectedTag, setSelectedTag] = useState<string | null>(searchParams.get("tag"))

  const applyFilters = () => {
    const params = new URLSearchParams()

    if (location) {
      params.set("location", location)
    }

    if (selectedTag) {
      params.set("tag", selectedTag)
    }

    router.push(`/?${params.toString()}`)
  }

  const clearFilters = () => {
    setLocation("")
    setSelectedTag(null)
    router.push("/")
  }

  const toggleTag = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null)
    } else {
      setSelectedTag(tag)
    }
  }

  return (
    <div className="rounded-lg border p-6 space-y-6 sticky top-8">
      <div>
        <h2 className="font-semibold text-lg mb-4">Filters</h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="Any location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Job Type</Label>
            <div className="flex flex-wrap gap-2">
              {commonTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button onClick={applyFilters}>Apply Filters</Button>
        <Button variant="outline" onClick={clearFilters} className="flex items-center">
          <X className="h-4 w-4 mr-2" />
          Clear Filters
        </Button>
      </div>
    </div>
  )
}

