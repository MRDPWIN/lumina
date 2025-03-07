import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  image: string
  title: string
  description: string
  tags: string[]
  className?: string
}

export default function ProjectCard({ image, title, description, tags, className }: ProjectCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="rounded-lg overflow-hidden mb-4">
        <Image src={image || "/placeholder.svg"} alt={title} width={400} height={300} className="w-full object-cover" />
      </div>
      <div className="flex gap-2 mb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`text-xs px-3 py-1 rounded-full ${
              tag === "AI"
                ? "bg-blue-600"
                : tag === "Marketing"
                  ? "bg-gray-700"
                  : tag === "Growth"
                    ? "bg-green-600"
                    : tag === "Content"
                      ? "bg-orange-500"
                      : tag === "Strategy"
                        ? "bg-blue-500"
                        : tag === "Automation"
                          ? "bg-purple-600"
                          : "bg-gray-700"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

