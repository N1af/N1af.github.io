import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Feedback = {
  id: number;
  name: string;
  rating: number;
  text: string;
};

const TestimonialsWithFeedbackForm = () => {
  const [feedbacks] = useState<Feedback[]>([
    {
      id: 1,
      name: "Fathima",
      rating: 5,
      text: `Jazakallah Khair, Naana. To Dhatha Aunty and everyone — you all have helped us so much.
Whatever we needed, you kept asking and provided everything for us… You’ve kept us safe all this time.
For everything, Jazakallah Khair, Naana.
We will never forget all of you.

Now, we can’t even imagine life without you, Naana… That thought itself makes us sad.
Our duas (prayers) will always be with you.

Naana, please keep this group open for updates.
If possible, share voice notes here too — we will also, Insha Allah, talk with you.

Definitely, please bring Dhatha Aunty, Shabira, and everyone from the shop to visit our home.`
    },
    {
      id: 2,
      name: "Mufa",
      rating: 5,
      text: `Jazakallahu Khair, Naana and Dhatha, for everything…
Words are not enough to explain all that you both have done for us, Naana and Dhatha.
Whatever we asked, without hesitation you provided for us, and you took such good care of us.

We will also never forget both of you.
We too, knowingly or unknowingly, may have made some mistakes.
If so, we are extremely sorry, Dhatha, Naana.

Aunty, please also keep us in your duas, Naana and Dhatha.

Jazakallahu Khair, Naana and Dhatha.`
    },
    {
      id: 3,
      name: "Husniya",
      rating: 5,
      text: `Assalamu Alaikum, Naana and Dhatha 💔🥺
I don’t even know how to express what I feel, it’s so difficult…
Leaving behind a family and going away like this feels so painful.

You took care of us without any shortcomings, just like your own sister and brother.
Aunty, shop sis, and everyone — we are going to miss you all so much 🥺❤‍🩹.

The memories of that home and the time we spent together with all of you are unforgettable 💔.`
    },
    {
      id: 4,
      name: "Nazmin",
      rating: 5,
      text: `Jazakallahu Khair, Naana, Dhatha, and Aunty, for everything…
These two years went by so quickly 🥹, but they gave us countless memories 🥺.

Whatever we asked for, Naana, without hesitation you did it for us.
You took such good care of us — Jazakallahu Khair ♥️.

Just one worry remains — may such a life not come again 😢.
Insha Allah, when you come to Kandy, please do call.

Keep us in your duas, Naana and Dhatha.`
    }
  ]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from current and former residents about their experience at our boarding home
          </p>
        </div>

        {/* Feedback display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {feedbacks.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 flex-shrink-0">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h3>
                    </div>

                    <div className="flex gap-1 mb-3">
                      {renderStars(testimonial.rating)}
                    </div>

                    <blockquote className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {testimonial.text}
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsWithFeedbackForm;
