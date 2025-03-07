import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  bgColor?: string
  iconBgColor?: string
}

export default function FeatureCard({
  icon,
  title,
  description,
  bgColor = "bg-gray-800",
  iconBgColor = "bg-pink-500",
}: FeatureCardProps) {
  return (
    <div className={`${bgColor} rounded-lg p-6`}>
      <div className="flex gap-4 items-start">
        <div className={`${iconBgColor} w-16 h-16 rounded-full flex items-center justify-center shrink-0`}>{icon}</div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

