/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import NewsCard from "@/app/comp/NewsCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { fetchAffairs } from "@/utils/affairs";
import { useEffect, useState } from "react";

export default function Page() {
    const { toast } = useToast();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    const searchAffairs = async () => {
        try {
            toast({
                title: "Searching affairs",
                description: "Please wait...",
            })

            const { results } = await fetchAffairs(search);
            setData(results);
        } catch (error) {
            console.error(error);
            toast({
                title: "Error",
                description: "Failed to search affairs",
            })
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                toast({
                    title: "Loading top affairs",
                    description: "Please wait...",
                })

                const { results } = await fetchAffairs();
                setData(results);
            } catch (error) {
                console.error(error);
                toast({
                    title: "Error",
                    description: "Failed to fetch top affairs",
                })
            }
        }

        fetchData();
    }, [])

    return (
        <div>
            <h1>Current Affairs Top Feed</h1>

            <div className="mt-5">
                <div className="flex justify-between items-center gap-x-2 mb-5">
                    <Input type="text" placeholder="Enter to search" onChange={(e) => {
                        setSearch(e.target.value);
                    }} />
                    <Button onClick={searchAffairs as any}>Search</Button>
                </div>
                {
                    data.length && (
                        <div className="flex gap-3 flex-wrap ">
                            {
                                data.map((item, index) => (
                                    <NewsCard key={index} article={item} />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}