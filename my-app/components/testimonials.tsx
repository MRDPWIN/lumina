export default function Testimonials() {
  const testimonials = [
    {
      content:
        "Flinza Media transformed my social media presence! Increased followers and engagement. Highly recommend their expert strategies!",
      color: "bg-pink-500",
    },
    {
      content:
        "Thanks to Flinza Media, my brand's visibility skyrocketed! Their expert guidance is invaluable. A must-have partner!",
      color: "bg-blue-500",
    },
    {
      content:
        "Flinza Media's automation tools saved me hours! My content now reaches a wider audience. Truly a game-changer!",
      color: "bg-orange-500",
    },
  ]

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Success Stories</h2>
        <p className="text-center max-w-3xl mx-auto mb-16">
          Explore firsthand experiences and discover the transformative impact of Flinza Media through our authentic
          testimonials.
        </p>

        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.color} rounded-2xl p-6 ${index % 2 === 1 ? "ml-auto" : "mr-auto"} max-w-md`}
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full shrink-0 flex-shrink-0"></div>
                <p>{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

