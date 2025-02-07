import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Check, LayoutList, Upload } from "lucide-react";
import { FileUploader } from "react-drag-drop-files";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { nanoid } from "nanoid";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ProductDataProps } from "@/interface";
import { SizeSelector } from "./components/form-components/SizeSelector";
import { GenderRadio } from "./components/form-components/GenderRadio";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { SelectCategory } from "./components/form-components/select-category";
import { ProductCategory } from "./components/product-category";

const ProductUpload = () => {
  const [imageURL, SetImageURL] = useState<string | null>(null);

  const formSchema = z.object({
    product_name: z
      .string()
      .min(1, "Product Name is required")
      .max(100, "Product Name must be 100 characters or less"),

    price: z
      .string()
      .min(1, "Price is required")
      .transform((val) => Number(val))
      .refine((val) => !isNaN(val) && val >= 0, {
        message: "Price must be a positive number",
      }),

    stock: z
      .number()
      .min(1, "Quantity should not 0")
      .int("Quantity must be an integer")
      .nonnegative("Quantity cannot be negative"),
    description: z
      .string()
      .min(5, "Description must be at least 10 characters")
      .max(100, "Description must not exceed 500 characters"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product_name: "",
      price: 0,
      stock: 1,
      description: "",
    },
  });

  // const { reset } = form;

  const onSubmit = async (data: ProductDataProps) => {
    const newProduct = {
      product_id: nanoid(),
      product_name: data.product_name,
      category: data.category,
      price: data.price,
      status: data.status,
      size: data.size,
      image: data.image,
      stock: data.stock,
      description: data.description,
    };
    console.log("Form Data:", data);
    console.log("Processed Product:", newProduct);
  };

  const handleFileUpload = async (file: File | string) => {
    try {
      const formData = new FormData();
      if (typeof file === "string") {
        formData.append("url", file);
      } else {
        const randomName = Math.random().toString(36).substring(2, 12); // Generate a random string of 10 characters

        const webpFile = new File([file], `${randomName}.webp`, {
          type: "image/webp",
        });
        formData.append("file", webpFile);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between mb-4">
        <div className="flex gap-4 items-center">
          <LayoutList />
          <span className="text-2xl font-bold">Add New Product</span>
        </div>
        <div className="space-x-4">
          <Button variant="outline" className="px-6 py-5 rounded-full text-sm">
            Save Draf
          </Button>
          <Button
            variant="default"
            className="px-6 py-5 rounded-full text-sm"
            onClick={form.handleSubmit(onSubmit)}
          >
            <Check />
            Add Product
          </Button>
        </div>
      </div>

      <h1 className="text-lg font-semibold mb-4">General Information</h1>
      <Form {...form}>
        <form className="flex gap-4">
          <div className="flex-[1.6] space-y-4">
            <FormField
              control={form.control}
              name="product_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="productName">Name Product</FormLabel>
                  <Input
                    id="productName"
                    placeholder="Product Name"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="productName">
                    Description Product
                  </FormLabel>
                  <div className="relative">
                    <Textarea
                      id="description"
                      className="border-1 peer block h-32 w-full appearance-none rounded-3xl border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900  ring-transparent focus:border-primary focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent dark:border-gray-600 dark:text-white"
                      placeholder=" "
                      {...field}
                    />
                    <Label
                      htmlFor="description"
                      className="absolute start-1 top-2 z-10 ml-3 origin-[0] -translate-y-4 scale-95 cursor-text bg-white px-1 text-sm text-dark-grey duration-100 peer-placeholder-shown:top-[15%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:ml-3 peer-focus:-translate-y-4 peer-focus:scale-95 peer-focus:px-1 peer-focus:text-primary dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                    >
                      What would you like to know?
                    </Label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-6">
              <SizeSelector />
              <GenderRadio />
            </div>

            <div className="pt-10">
              <h3 className="text-lg font-medium mb-4">Pricing And Stock</h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="price">Price</FormLabel>
                        <Input id="price" placeholder="Price" {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="stock"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="price">Stock</FormLabel>
                        <Input id="stock" placeholder="Stock" {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="discount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="price">Discount %</FormLabel>
                        <Input
                          id="discount"
                          placeholder="Discount %"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="coupon_code"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="price">Coupon code</FormLabel>
                        <Input
                          id="price"
                          placeholder="Coupon code"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-14">
            <div>
              <h3 className="text-base font-semibold mb-4">Upload Img</h3>
              <FileUploader
                name="file"
                handleChange={(file: any) => {
                  handleFileUpload(file);
                }}
                types={["JPG", "JPEG", "PNG", "WEBP"]}
              >
                <div
                  className={cn(
                    "flex h-[400px] cursor-pointer flex-col items-center justify-center space-y-2 rounded-2xl border-2 border-dashed border-gray-300 px-7 transition-all hover:border-primary",
                    imageURL && "h-24 sm:h-40 "
                  )}
                >
                  {imageURL ? (
                    <img
                      src={imageURL}
                      alt="image"
                      className="h-24 w-full rounded-md object-contain sm:h-40"
                    />
                  ) : (
                    <div className="flex h-24 w-full flex-col items-center justify-center sm:h-40">
                      <div className="flex flex-col items-center justify-center text-sm lg:text-base">
                        <Upload className="size-6 text-gray-400" />
                        <p className="font-normal text-gray-400">
                          Drag and drop your image here
                        </p>
                      </div>
                      <p className="font-normal text-gray-400">
                        or click to browse
                      </p>
                      <p className="text-xs font-normal text-gray-400 lg:text-sm">
                        [JPG, JPEG, PNG, WEBP]
                      </p>
                    </div>
                  )}
                </div>
              </FileUploader>
            </div>

            <div className="space-y-12">
              <SelectCategory />
              <ProductCategory />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProductUpload;
