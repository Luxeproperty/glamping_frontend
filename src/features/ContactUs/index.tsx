import Title from '@/components/common/Title';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from '@/components/ui/card'; // Assuming you're using shadcn UI
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import { useMutation } from '@tanstack/react-query';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { toast } from 'sonner';
// import styles from './index.module.css';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' }),
  last_name: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Enter a valid email' }),
  phone: z
    .string()
    .min(10, { message: 'Phone number must contain at least 10 digits' })
    .regex(phoneRegex, { message: 'Invalid phone number' }),
  message: z.string().min(25, {
    message: 'Please provide a detailed description of your question.'
  })
});

const api_base_url = import.meta.env.VITE_API_BASE_URL;
const ContactUs = () => {
  type FormData = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    message: string;
  };
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      message: ''
    }
  });
  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await fetch(`${api_base_url}/contact-us/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      return response.json();
    },
    onSuccess: () => {
      // Optional: Reset the form on success
      form.reset();
      toast.success('Thank you for reaching out!', {
        description: `We'll get back to you soon.`
      });
    },
    onError: () => {
      toast.error('Submission failed', {
        description: `Please try again later or contact support.`
      });
    }
  });

  // Handle form submission
  const onSubmit = (data: FormData) => {
    mutation.mutate(data); // Trigger the mutation
  };

  const LocationSection = () => {
    return (
      <div className="flex py-10 flex-col lg:flex-row w-full overflow-hidden">
        {/* Left side: Map */}
        <div className="w-full lg:w-1/2 p-10 ">
          <iframe
            className="rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2101.61033495018!2d-1.7697849324000152!3d54.65155442279882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c29668125b083%3A0x47497b9646307bc7!2sCountry%20Glamping!5e0!3m2!1sen!2sca!4v1727812144016!5m2!1sen!2sca"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>

        {/* Right side: Title and Location Description */}
        <div className="w-full lg:w-1/2  justify-start items-start p-10">
          <div className="flex flex-col">
            <h2 className="text-2xl">Our Location</h2>
            <h1 className="text-3xl font-bold">Country Glamping</h1>
            <p className="text-gray-600 mt-4">
              A68 Toft Hill Ln
              <br />
              Bishop Auckland, Durham
              <br />
              DL14 0JF
              <br />
              United Kingdom
            </p>
          </div>
          <div className="my-10">
            <Title className="text-3xl font-bold mb-4">Directions</Title>

            <Card className="bg-white p-6 rounded-lg shadow-lg">
              <CardContent>
                <div className="space-y-4">
                  {/* Road Directions from The South */}
                  <div className="flex items-start space-x-2">
                    <div>
                      <h3 className="font-semibold">
                        Road from The South (Leeds)
                      </h3>
                      <p className="text-gray-600">
                        (70.0 miles) Travelling north on the A1M exit at
                        junction 58 onto the A68 towards Corbridge/Bishop
                        Auckland. Travel North West on the A68 for 10 miles and
                        turn right onto the Country Glamping site which is
                        situated on the same site as The 68 Cafe.
                      </p>
                    </div>
                  </div>

                  {/* Road Directions from The North */}
                  <div className="flex items-start space-x-2">
                    <div>
                      <h3 className="font-semibold">
                        Road from The North (Newcastle A1)
                      </h3>
                      <p className="text-gray-600">
                        (38.0 miles) Travelling south on the A1 exit at junction
                        75 onto the A69 towards Hexham. Follow the A69 for 12
                        miles and turn left onto the A68 towards Darlington.
                        Follow the A68 for 26 miles and turn right onto the
                        Country Glamping site situated on the same site as The
                        68 Cafe.
                      </p>
                    </div>
                  </div>

                  {/* Air Directions from Newcastle */}
                  <div className="flex items-start space-x-2">
                    <div>
                      <h3 className="font-semibold">Air from Newcastle</h3>
                      <p className="text-gray-600">
                        (39.0 miles) Travelling south on the A1 exit at junction
                        75 onto the A69 towards Hexham. Follow the A69 for 12
                        miles and turn left onto the A68 towards Darlington.
                        Follow the A68 for 26 miles and turn right onto the
                        Country Glamping site situated on the same site as The
                        68 Cafe.
                      </p>
                    </div>
                  </div>

                  {/* Train Directions from Darlington */}
                  <div className="flex items-start space-x-2">
                    <div>
                      <h3 className="font-semibold">Train from Darlington</h3>
                      <p className="text-gray-600">
                        (15.0 miles) Travel North on the A68 for 15 miles and
                        turn right onto the Country Glamping site situated on
                        the same site as The 68 Cafe.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-auto max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row overflow-hidden">
        {/* Left side: Contact Us title */}
        <div className="space-y-5 w-full lg:w-3/5 flex flex-col justify-start items-start lg:items-start p-10 lg:pl-10 lg:mt-10">
          <h1 className="text-5xl font-bold mt-6 lg:mt-0 lg:pt-10">
            Contact Us
          </h1>
          <CardDescription className="text-[#868383] text-base">
            Reach out to us via email, phone, or fill out the form to discuss
            how we can assist you.
          </CardDescription>
          <CardDescription className="text-[#868383] text-base flex items-center">
            <EnvelopeClosedIcon className="mr-2 text-blue-500" />
            <a
              href="mailto:enquiries@countryglampinguk.com"
              className="text-blue-500 underline"
            >
              enquiries@countryglampinguk.com
            </a>
          </CardDescription>

          <CardDescription className="text-[#868383] text-base flex items-center">
            <svg
              className="mr-2 text-blue-500"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 2.5C4 2.22386 4.22386 2 4.5 2H10.5C10.7761 2 11 2.22386 11 2.5V12.5C11 12.7761 10.7761 13 10.5 13H4.5C4.22386 13 4 12.7761 4 12.5V2.5ZM4.5 1C3.67157 1 3 1.67157 3 2.5V12.5C3 13.3284 3.67157 14 4.5 14H10.5C11.3284 14 12 13.3284 12 12.5V2.5C12 1.67157 11.3284 1 10.5 1H4.5ZM6 11.65C5.8067 11.65 5.65 11.8067 5.65 12C5.65 12.1933 5.8067 12.35 6 12.35H9C9.1933 12.35 9.35 12.1933 9.35 12C9.35 11.8067 9.1933 11.65 9 11.65H6Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <a href="tel:+447762943214" className="text-blue-500 underline">
              +44 (0) 776 294 3214
            </a>
          </CardDescription>

          {/* Muted the below as the phone number does not work */}

          {/* <CardDescription className="text-[#868383] text-base flex items-center">
            <svg
              className="mr-2 text-blue-500"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 2.5C4 2.22386 4.22386 2 4.5 2H10.5C10.7761 2 11 2.22386 11 2.5V12.5C11 12.7761 10.7761 13 10.5 13H4.5C4.22386 13 4 12.7761 4 12.5V2.5ZM4.5 1C3.67157 1 3 1.67157 3 2.5V12.5C3 13.3284 3.67157 14 4.5 14H10.5C11.3284 14 12 13.3284 12 12.5V2.5C12 1.67157 11.3284 1 10.5 1H4.5ZM6 11.65C5.8067 11.65 5.65 11.8067 5.65 12C5.65 12.1933 5.8067 12.35 6 12.35H9C9.1933 12.35 9.35 12.1933 9.35 12C9.35 11.8067 9.1933 11.65 9 11.65H6Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <a href="tel:+443333449968" className="text-blue-500 underline">
              +44 (0) 333 344 9968
            </a>
          </CardDescription> */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-10">
            <div>
              <Title className="font-bold">Customer Support</Title>
              <CardDescription>
                Our support team is here 24/7 to assist with any queries or
                issues you may have.
              </CardDescription>
            </div>
            <div>
              <Title className="font-bold">Feedback & Suggestions</Title>
              <CardDescription>
                Share your thoughts and feedback. We value your input in helping
                us improve.
              </CardDescription>
            </div>
            <div>
              <Title className="font-bold">Business Inquiries</Title>
              <CardDescription>
                For partnership or collaboration inquiries, feel free to reach
                out to our team.
              </CardDescription>
            </div>
          </div>
        </div>

        {/* Right side: Form card */}
        <div className="w-full p-4 lg:w-2/5 flex justify-center items-start lg:p-10">
          <Card className="w-full max-w-lg shadow-lg rounded-3xl border-none bg-[#f5f5f5]">
            <CardHeader>
              <CardTitle className="text-4xl">Get in Touch</CardTitle>
              <CardDescription className="text-[#bfb8b8] text-base">
                We're here to help. Fill out the form below and we'll be in
                touch shortly.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-wrap space-y-0 gap-4"
                >
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            className="rounded-full w-full py-5"
                            placeholder="First name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            className="rounded-full w-full py-5"
                            placeholder="Last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            className="rounded-full w-full py-5"
                            placeholder="Email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <PhoneInput defaultCountry="gb" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Textarea
                            className="rounded-lg w-full py-5"
                            placeholder="How can we assist you?"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="w-full">
                    <Button type="submit" className="w-full">
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>

              {/* Last Name */}
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-white">
        <LocationSection />
      </div>
    </div>
  );
};

export default ContactUs;
