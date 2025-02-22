import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import { AppSidebar } from "../app-sidebar"
import Dashboard from "../Dashboard"
import Job from "../Job"

export function TabComp() {
    return (
        <Tabs defaultValue="jobs" className="flex px-standardSize">
            <TabsList className="flex flex-col space-y-5" >
                <TabsTrigger value="jobs">Jobs</TabsTrigger>
            </TabsList>
            <TabsContent value="jobs" className="pl-4 space-y-1">
                <Card>
                    <Job />
                </Card>
                <Card>
                    <Job />
                </Card>
            </TabsContent>
        </Tabs >
    )
}



// import { Button } from "@/components/ui/button"
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//     Tabs,
//     TabsContent,
//     TabsList,
//     TabsTrigger,
// } from "@/components/ui/tabs"

// export function TabComp() {
//     return (
//         // <Tabs defaultValue="account" className="w-[400px]">
//         <Tabs defaultValue="account" className="w-[400px] flex">
//             {/* <TabsList className="grid w-full grid-cols-2"> */}
//             <TabsList className="grid w-full grid-rows-2 space-y-5">
//                 <TabsTrigger value="orders">Orders</TabsTrigger>
//                 <TabsTrigger value="users">Users</TabsTrigger>
//                 <TabsTrigger value="agents">Agents</TabsTrigger>
//                 <TabsTrigger value="locations">Locations</TabsTrigger>
//                 <TabsTrigger value="services">Services</TabsTrigger>
//                 <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
//             </TabsList>
//             <TabsContent value="account">
//                 <Card>
//                     <CardHeader>
//                         <CardTitle>Account</CardTitle>
//                         <CardDescription>
//                             Make changes to your account here. Click save when you&apos;re done.
//                         </CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-2">
//                         <div className="space-y-1">
//                             <Label htmlFor="name">Name</Label>
//                             <Input id="name" defaultValue="Pedro Duarte" />
//                         </div>
//                         <div className="space-y-1">
//                             <Label htmlFor="username">Username</Label>
//                             <Input id="username" defaultValue="@peduarte" />
//                         </div>
//                     </CardContent>
//                     <CardFooter>
//                         <Button>Save changes</Button>
//                     </CardFooter>
//                 </Card>
//             </TabsContent>
//             <TabsContent value="password">
//                 <Card>
//                     <CardHeader>
//                         <CardTitle>Password</CardTitle>
//                         <CardDescription>
//                             Change your password here. After saving, you&apos;ll be logged out.
//                         </CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-2">
//                         <div className="space-y-1">
//                             <Label htmlFor="current">Current password</Label>
//                             <Input id="current" type="password" />
//                         </div>
//                         <div className="space-y-1">
//                             <Label htmlFor="new">New password</Label>
//                             <Input id="new" type="password" />
//                         </div>
//                     </CardContent>
//                     <CardFooter>
//                         <Button>Save password</Button>
//                     </CardFooter>
//                 </Card>
//             </TabsContent>
//         </Tabs>
//     )
// }
