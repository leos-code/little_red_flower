import { useState } from 'react'
import "./App.css";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Flower } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";

interface RewardRecord{
  content: string
  createdAt: string
}

function App() {
  const [rewardRecord, setRewardRecord] = useState<RewardRecord[]>([])

  function addRewards() {}

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Avatar className="" onClick={addRewards}>
              <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
              <AvatarFallback>XXX</AvatarFallback>
            </Avatar>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>奖励一朵小红花</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                表扬内容
              </Label>
              <Input
                id="reward_content"
                defaultValue="在家打扫卫生"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">保存</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Card className="w-100">
        <CardHeader>本月奖励的花朵</CardHeader>
        <CardContent>
          <Flower color="#eb0505" strokeWidth="1.5" size={40}></Flower>
        </CardContent>
      </Card>

      <div>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>最近奖励</CardTitle>
            <CardDescription>奖励记录</CardDescription>
          </CardHeader>
          <CardContent>
            {}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;
