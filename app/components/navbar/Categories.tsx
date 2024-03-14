"use client"

import React from "react";
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
	GiBarn,
	GiCastle,
	GiCaveEntrance,
	GiDesert,
	GiFishing,
	GiForestCamp,
	GiIsland,
	GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
export const categories = [
	{
		label: "Beach",
		icon: TbBeach,
		description: "This property is close to the beach",
	},
	{
		label: "Windmills",
		icon: GiWindmill,
		description: "",
	},
	{
		label: "Modern",
		icon: MdOutlineVilla,
		description: "This property is modern",
	},
	{
		label: "Countryside",
		icon: TbMountain,
		description: "This property is in the countryside",
	},
	{
		label: "Pools",
		icon: TbPool,
		description: "This property has a pool",
	},
	{
		label: "Islands",
		icon: GiIsland,
		description: "This property is on an island",
	},
	{
		label: "Lake",
		icon: GiFishing,
		description: "This property is close to a lake",
	},
	{
		label: "Skiing",
		icon: FaSkiing,
		description: "This property is close to a lake",
	},
	{
		label: "Castles",
		icon: GiCastle,
		description: "This property is a castle",
	},
	{
		label: "Camping",
		icon: GiForestCamp,
		description: "This property has camping activities",
	},
	{
		label: "Arctic",
		icon: BsSnow,
		description: "This property is around snow",
	},
	{
		label: "Cave",
		icon: GiCaveEntrance,
		description: "This property is at a cave",
	},
	{
		label: "Desert",
		icon: GiDesert,
		description: "This property is in the desert",
	},
	{
		label: "Barns",
		icon: GiBarn,
		description: "This property is at a farm",
	},
	{
		label: "Luxury",
		icon: IoDiamond,
		description: "This property is luxurious",
	},
];

const Categories = () => {
	const params = useSearchParams();

	const category = params?.get("category");
	const pathName = usePathname();

	const isMainPage = pathName === "/";

	if (!isMainPage) {
		return null;
	}

	return (
		<Container>
			<div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
				{categories.map((item) => (
					<CategoryBox
						key={item.label}
						label={item.label}
						icon={item.icon}
						selected={category === item.label}
					/>
				))}
			</div>
		</Container>
	);
};

export default Categories;
