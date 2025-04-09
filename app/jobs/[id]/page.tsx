import { getJobById } from "@/lib/jobs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Building2, MapPin, Clock, DollarSign } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function JobPage({ params }: { params: { id: string } }) {
  const job = await getJobById(Number.parseInt(params.id))

  if (!job) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to listings
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{job.title}</h1>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <div className="flex items-center text-muted-foreground">
                <Building2 className="h-4 w-4 mr-1" />
                <span>{job.company}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span>Posted {job.postedAt}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {job.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>{job.description}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <ul className="list-disc pl-5 space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8 rounded-lg border p-6 space-y-6">
            <div>
              <h3 className="font-medium mb-2">Salary</h3>
              <div className="flex items-center text-lg font-semibold">
                <DollarSign className="h-5 w-5 mr-1 text-green-600 dark:text-green-400" />
                {job.salary}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Employment Type</h3>
              <p>{job.employmentType}</p>
            </div>

            <Button className="w-full">Apply Now</Button>
          </div>
        </div>
      </div>
    </main>
  )
}

