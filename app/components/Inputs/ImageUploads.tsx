"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import { CldUploadWidget } from "next-cloudinary";

declare global {
	var cloudinary: any;
}

interface ImageUploadProps {
	onChange: (value: string) => void;
	value: string;
}

const ImageUploads: React.FC<ImageUploadProps> = ({ onChange, value }) => {
   const handleUpload = useCallback((result: any) => {
      console.log(result.info.secure_id)
      // onChange(result)
   }, [onChange])


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
						className="relative cursor-pointer hover:opacity-70 transition border-2 p-20 border-dashed border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
					>
						<TbPhotoPlus size={50} />
						<div className="font-semibold text-lg">Click to upload</div>

                  {
                     value && (
							<div className="absolute inset-0 w-full h-full">
								<Image
									alt="Upload"
									src={value}
									fill
									style={{ objectFit: "cover" }}
								/>
							</div>
                     )
                  }
					</div>
				);
			}}
		</CldUploadWidget>
	);
};

export default ImageUploads
