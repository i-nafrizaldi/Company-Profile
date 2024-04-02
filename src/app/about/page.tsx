import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-4">
      <div className="items-center space-y-2">
        <div className="relative h-[300px] w-full overflow-hidden md:h-[600px] ">
          <Image
            src="https://images.unsplash.com/photo-1583202075405-8d68e5ba459b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Layonair Image"
            fill
            className="object-cover"
            loading="lazy"
            quality={70}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-x-0 bottom-20 flex items-center justify-center text-3xl font-black text-white md:bottom-1/4 md:text-5xl">
            About Us
          </div>
        </div>
      </div>
      <Separator />
      <section className="py-5">
        <div className="mx-auto w-full items-center text-center drop-shadow-xl md:w-[900px]">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold md:text-5xl">
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base">
                Established in 1996, LayonAir has emerged as a prominent figure
                in the aviation industry, boasting a legacy of over two decades
                of service excellence. Initially founded in Yogyakarta,
                Indonesia, LayonAir operated under the umbrella of PT. Pemuda
                Tersesat (PT. PESAT Group), leveraging the expertise and
                resources of its parent company to navigate the competitive
                aviation landscape. Throughout its journey, LayonAir has
                remained committed to its founding principles of reliability,
                affordability, and customer satisfaction. <br />
                <br />
                Over the years, the company has expanded its domestic and
                international flight routes, connecting diverse destinations and
                catering to the evolving needs of travelers. Despite facing
                various challenges, LayonAir has consistently demonstrated
                resilience and adaptability, continuously innovating to enhance
                the quality of air travel experiences. With a focus on safety
                and efficiency, LayonAir has earned a reputation for punctuality
                and comfort, setting itself apart as a preferred choice for
                passengers across Indonesia and beyond. As LayonAir looks to the
                future, it remains dedicated to elevating the standards of air
                travel, striving to make every journey a seamless and enjoyable
                experience for its valued customers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="my-5 flex flex-col gap-4 rounded-lg bg-white py-4">
        <div className="mx-auto my-5 flex w-full flex-row rounded-l-full bg-[#ea1b28] p-5 text-white shadow-lg drop-shadow-lg md:w-[800px]">
          <div className="mb-3 text-xl font-bold md:text-5xl">Our Vision</div>
          <div className="my-auto text-center italic">
            "To become a leading pioneer in the aviation industry, providing
            unparalleled air travel experiences through innovation, punctuality,
            and superior service for every customer."
          </div>
        </div>
        <div className="mx-auto my-5 flex w-full flex-row-reverse gap-2 rounded-r-full bg-[#ea1b28] p-5 text-white shadow-lg drop-shadow-lg md:w-[800px]">
          <div className="my-auto text-right text-xl font-bold md:text-5xl">
            Our Mission
          </div>
          <div className="my-auto text-center italic">
            “Strengthening business fundamental through strong revenue growth,
            cost leadership implementation, organization effectiveness and group
            synergy reinforcement while focusing on high standard of safety and
            customer-oriented services delivered by professional & passionate
            employees”
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="mx-auto w-full items-center text-center drop-shadow-xl md:w-[900px]">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold md:text-5xl">
                Our Culture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base">
                At Layon Air, our company culture is driven by a spirit of
                collaboration, innovation, and excellence. We believe in
                fostering an inclusive and motivating work environment where
                every employee is valued and encouraged to reach their full
                potential. We are also committed to operating with integrity and
                prioritizing safety in all aspects of our business. <br />
                <br />
                With a focus on customer satisfaction, Layon Air continually
                strives to enhance the air travel experience and cargo services,
                making air travel easier, more comfortable, and safer for every
                customer.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
