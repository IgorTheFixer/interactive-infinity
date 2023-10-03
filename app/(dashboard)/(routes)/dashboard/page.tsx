import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      Test
      <UserButton afterSignOutUrl="/"/>
    </div>
    
  )
}