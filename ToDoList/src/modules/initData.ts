import { useEffect } from 'react';
import {setTask} from './storage'
  
  const tasks: Task[] = [
    {
      id: 1,
      title: "Complete Project Proposal",
      description: "Draft and submit the project proposal for review.",
      tag: "Work",
      completed: false,
    },
    {
      id: 2,
      title: "Buy Groceries",
      description: "Purchase groceries for the week, including fruits, vegetables, and snacks.",
      tag: "Personal",
      completed: false,
    },
    {
      id: 3,
      title: "Prepare Presentation",
      description: "Create a presentation for the upcoming client meeting.",
      tag: "Work",
      completed: false,
    },
    {
      id: 4,
      title: "Gym Workout",
      description: "Hit the gym for a workout session to stay fit and healthy.",
      tag: "Health",
      completed: true,
    },
    {
      id: 5,
      title: "Read Book",
      description: "Spend some time reading the latest book from your favorite author.",
      tag: "Personal",
      completed: false,
    },
    {
      id: 6,
      title: "Write Blog Post",
      description: "Draft a blog post on a topic of interest and publish it on your blog.",
      tag: "Personal",
      completed: true,
    },
    {
      id: 7,
      title: "Call Mom",
      description: "Give your mom a call to catch up and chat about family news.",
      tag: "Personal",
      completed: false,
    },
    {
      id: 8,
      title: "Plan Weekend Getaway",
      description: "Research and plan a weekend getaway to a nearby destination.",
      tag: "Travel",
      completed: false,
    },
    {
      id: 9,
      title: "Coding Practice",
      description: "Solve coding challenges on LeetCode or HackerRank to improve coding skills.",
      tag: "Work",
      completed: true,
    },
    {
      id: 10,
      title: "Organize Closet",
      description: "Declutter and organize your closet to make space for new clothes.",
      tag: "Personal",
      completed: false,
    },
  ];


export const setSampleData = () => {
    tasks.forEach((task)=>{ setTask(task) })
    
}

  