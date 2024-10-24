
import React from "react";
import { LayoutGrid } from "@/components/ui/LayoutGrid";

export  function LayoutGridDemo() {
    return (
        <div className="h-full py-20 w-full">
            <LayoutGrid cards={cards} />
        </div>
    );
}

const cards = [
    {
        id: 1,
        content: "",
        className: "col-span-2",
        thumbnail:
            "/photo/5.jpg",
    },
    {
        id: 2,
        content: "",
        className: "col-span-1 ",
        thumbnail:
            "/photo/2.jpg",
    },
    {
        id: 3,
        content: "",
        className: "col-span-1 ",
        thumbnail:
            "/photo/3.jpg",
    },
    {
        id: 4,
        content: "",
        className: "col-span-2",
        thumbnail:
            "/photo/7.jpg",
    },
    {
        id: 7,
        content: "",
        className: "col-span-2",
        thumbnail:
            "/photo/4.jpg",
    },
    {
        id: 5,
        content: "",
        className: ":col-span-1 ",
        thumbnail:
            "/photo/1.jpg",
    },

    {
        id: 6,
        content: "",
        className: "col-span-1",
        thumbnail:
            "/photo/6.jpg",
    },
    {
        id: 9,
        content: "",
        className: "col-span-2",
        thumbnail:
            "/photo/9.jpg",
    },
    {
        id: 8,
        content: "",
        className: "col-span-1",
        thumbnail:
            "/photo/8.jpg",
    },

    {
        id: 10,
        content: "",
        className: "col-span-1",
        thumbnail:
            "/photo/10.jpg",
    },
    {
        id: 11,
        content: "",
        className: "col-span-1",
        thumbnail:
            "/photo/11.jpg",
    },
    {
        id: 12,
        content: "",
        className: "col-span-1",
        thumbnail:
            "/photo/12.jpg",
    },
    {
        id: 13,
        content: "",
        className: "col-span-2",
        thumbnail:
            "/photo/13.jpg",
    },
    {
        id: 16,
        content: "",
        className: "col-span-2",
        thumbnail:
            "/photo/16.jpeg",
    },
    {
        id: 14,
        content: "",
        className: "col-span-1",
        thumbnail:
            "/photo/14.jpg",
    },
    {
        id: 15,
        content: "",
        className: "col-span-1",
        thumbnail:
            "/photo/15.jpeg",
    },
    {
        id: 17,
        content: "",
        className: "col-span-1",
        thumbnail:
            "/photo/17.jpeg",
    },
    {
        id: 18,
        content: "",
        className: "col-span-1",
        thumbnail:
            "/photo/18.jpg",
    },
    {
        id: 19,
        content: "",
        className: "col-span-1",
        thumbnail:
            "/photo/19.jpg",
    },
];
