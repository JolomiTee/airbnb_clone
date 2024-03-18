"use client";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import { CldUploadWidget } from "next-cloudinary";

declare global {
	var cloudinary: any;
}

interface ImageUploadProps {
	onChange: (valus: string) => void;
	value: string;
}

import React from "react";

const ImageUploads: React.FC<ImageUploadProps> = ({ onChange, value }) => {
	const handleUpload = useCallback(
		(result: any) => {
			onChange(result.info.secure_url);
		},
		[onChange]
	);
	return (
		<CldUploadWidget
			onUploadAdded={handleUpload}
			uploadPreset="a8qfwxw4"
			options={{
				maxFiles: 1,
			}}
		>
			{({ open }) => {
				return (
					<div
						onClick={() => open?.()}
						className="relative cursor-pointer hover:opacity-70 transition border-dashed border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
					>
						<TbPhotoPlus size={50} />
						<div className="font-semibold text-lg">Click to upload</div>
						{value && (
							<div className="absolute inste-0 w-full h-full">
								<Image
									alt="Upload"
									src={value}
									fill
									style={{ objectFit: "cover" }}
								/>
							</div>
						)}
					</div>
				);
			}}
		</CldUploadWidget>
	);
};

export default ImageUploads;
