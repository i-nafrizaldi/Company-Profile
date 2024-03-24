import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function CardWithForm() {
  return (
    <Card className="w-[700px]">
      <CardHeader>
        <CardTitle>Get in Touch with Us</CardTitle>
        <CardDescription>
          You can directly send your feedback or enquiry by filling in this
          form.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Salutations</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Bapak</SelectItem>
                  <SelectItem value="sveltekit">Ibu</SelectItem>
                  <SelectItem value="astro">Miss</SelectItem>
                  <SelectItem value="nuxt">Mr</SelectItem>
                  <SelectItem value="nuxt">Mrs</SelectItem>
                  <SelectItem value="nuxt">Ms</SelectItem>
                  <SelectItem value="nuxt">Mstr</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">First Name</Label>
              <Input id="name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Last Name</Label>
              <Input id="name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="Email" type="email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Your Message</Label>
              <Textarea />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Send</Button>
      </CardFooter>
    </Card>
  );
}
