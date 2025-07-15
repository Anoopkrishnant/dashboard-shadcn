"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { motion } from "framer-motion";

const initialTodos = [
  { id: 1, label: "Claim 20% discount coupon for service", completed: true },
  { id: 2, label: "Redeem ₹500 CRED gift voucher", completed: false },
  { id: 3, label: "Apply referral code for extra cashback", completed: false },
  { id: 4, label: "Track recent order of car cleaning kit", completed: true },
  { id: 5, label: "Use Diwali festive offer before expiry", completed: false },
  { id: 6, label: "Gift a voucher to a friend", completed: false },
  { id: 7, label: "Claim birthday gift reward", completed: true },
  { id: 8, label: "Use coupon on vehicle insurance renewal", completed: false },
  { id: 9, label: "Invite 3 friends to earn bonus points", completed: false },
  { id: 10, label: "Redeem loyalty points for fuel vouchers", completed: true },
  {
    id: 11,
    label: "Claim referral reward from John's signup",
    completed: false,
  },
  { id: 12, label: "Apply discount code to cart", completed: true },
  { id: 13, label: "Confirm delivery of free gift item", completed: false },
];

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <motion.div
      className="p-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <h1 className="text-lg font-medium mb-6">Todo List</h1>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {todos.map((todo) => (
            <Card key={todo.id} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox
                  id={`item-${todo.id}`}
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(todo.id)}
                />
                <label
                  htmlFor={`item-${todo.id}`}
                  className={`text-sm text-muted-foreground ${
                    todo.completed ? "line-through" : ""
                  }`}
                >
                  {todo.label}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </motion.div>
  );
};

export default TodoList;
