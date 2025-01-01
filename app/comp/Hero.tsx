import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Hero({ cta, storeEmail }: { cta: any, storeEmail: any }) {

    const requestDemo = async () => {
        await cta();
    }

    return (
        <>
            {/* Hero */}
            <div className="container py-24 lg:py-32">
                {/* Grid */}
                <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div className="lg:col-span-3">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            ActiveYouth
                        </h1>
                        <p className="mt-3 text-xl text-muted-foreground">
                            Support athletes mental well-being by integrating AI-driven resources, personalized counseling, and continuous monitoring.
                        </p>
                        <div className="mt-5 lg:mt-8 flex flex-col sm:items-center gap-2 sm:flex-row sm:gap-3">
                            <div className="w-full max-w-lg  lg:w-auto">
                                <Label className="sr-only">Search</Label>
                                <Input placeholder="Enter work email" type="email" onChange={(e) => storeEmail(e)} />
                            </div>
                            <Button className="w-min" onClick={requestDemo}>Request demo</Button>
                            <br />
                        </div>
                        <div className="flex block items-center gap-x-3 mt-4">
                            <Link href="/sign-up" className="bg-black text-white font-medium rounded px-3 py-1">
                                Sign Up
                            </Link>

                            <Link href="/sign-in" className="bg-gray-700 text-white font-medium rounded px-3 py-1">
                                Sign In
                            </Link>
                        </div>
                        {/* Brands */}
                        <div className="mt-6 lg:mt-12">
                            <span className="text-xs font-medium uppercase">Trusted by:</span>
                            <p>continuously tracks emotional well-being, enabling early detection of stress, anxiety, or burnout, and providing proactive interventions to maintain optimal mental health.</p>
                        </div>
                        {/* End Brands */}
                    </div>
                    {/* End Col */}
                    <div className="lg:col-span-4 mt-10 lg:mt-0">
                        <Image
                            className="rounded-xl"
                            src="/hero.png"
                            alt="Image Description"
                            width={540}
                            height={340}
                        />
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Hero */}
        </>
    );
}
