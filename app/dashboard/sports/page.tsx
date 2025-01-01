"use client";

import MatchCard from "@/app/comp/MatchCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { fetchSports } from "@/utils/sports";
import { useEffect, useState } from "react";

export default function Page() {
    const { toast } = useToast();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { events } = await fetchSports();
                console.log(JSON.stringify(events[0]))
                setData(events);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [])

    return (
        <div>
            <h1>Sports Top Feed</h1>

            <div className="mt-5">
                <div className="flex justify-between items-center gap-x-2 mb-5">
                    <Input type="text" placeholder="Enter to search" onChange={(e) => {
                        setSearch(e.target.value);
                    }} />
                    <Button onClick={async () => {
                        toast({
                            title: "Loading top sports",
                            description: "Please wait...",
                        })

                        const { events } = await fetchSports(search);
                        setData(events);
                    }}>Search</Button>
                </div>
                {
                    data.length && (
                        <div className="flex gap-3 flex-wrap ">
                            {
                                data.map((item, index) => (
                                    <MatchCard key={index} match={item} />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}