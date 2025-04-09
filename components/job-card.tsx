import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, MapPin, Clock, DollarSign } from "lucide-react"
import type { Job } from "@/types/job"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <Link href={`/jobs/${job.id}`} className="block">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-xl">{job.title}</h3>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <div className="flex items-center text-muted-foreground text-sm">
                  <Building2 className="h-3.5 w-3.5 mr-1" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>Posted {job.postedAt}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                <DollarSign className="h-4 w-4 mr-1" />
                {job.salary}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

