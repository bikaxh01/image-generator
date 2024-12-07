"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { promptSchema } from "./GenerateConversationInput";

function InputPromptComponent({ onSubmit,isLoading }: any) {
  const form = useForm<z.infer<typeof promptSchema>>({
    resolver: zodResolver(promptSchema),
  });

  return (
    <div className=" w-full h-full ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 ">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Write your prompt here"
                    className="resize-none h-28 font-semibold"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" items-end flex justify-end">
            <Button type="submit" disabled={isLoading}>Generate {<SparklesIcon />}</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default InputPromptComponent;
