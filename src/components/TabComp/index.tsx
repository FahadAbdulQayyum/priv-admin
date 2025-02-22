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
import Job from "../Job"

export function TabComp() {
    return (
        <Tabs defaultValue="jobs" className="flex px-standardSize">
            {/* Main Tabs */}
            <div className="flex flex-col">
                <TabsList className="flex flex-col space-y-5">
                    <TabsTrigger value="jobs">Jobs</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5">
                    <TabsTrigger value="jobs1">Jobs1</TabsTrigger>
                </TabsList>
            </div>

            {/* Jobs Content with Nested Tabs */}
            <TabsContent value="jobs" className="pl-4 space-y-1">
                <Tabs defaultValue="past-jobs">
                    {/* Nested Tabs */}
                    <TabsList className="flex space-x-5 mb-4 w-full">
                        <TabsTrigger value="past-jobs">Past Jobs</TabsTrigger>
                        <TabsTrigger value="future-jobs">Future Jobs</TabsTrigger>
                    </TabsList>

                    {/* Nested Tabs Content */}
                    <TabsContent value="past-jobs" className="space-y-2">
                        <Card>
                            <Job
                                svcs="$180"
                                payout="$244"
                                clientname="Senior Dsena"
                                clientphone="435 748 9883"
                                clientemail="senior88@gmail.com"
                                proemail="jilliaocasio@me.com"
                                proephone="434 845 8738"
                                gender="female"
                            // proimage="female"
                            />
                        </Card>
                        <Card>
                            <Job
                                svcs="$180"
                                payout="$244"
                                clientname="Yena Lost"
                                clientphone="435 748 9883"
                                clientemail="yena@gmail.com"
                                proemail="picaso@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-66e8f7be8af69f381a61d445-profilePic/1737308490559.jpeg"
                            />
                        </Card>
                    </TabsContent>

                    <TabsContent value="future-jobs" className="space-y-2">
                        <Card>
                            <Job
                                svcs="$333"
                                payout="$653"
                                clientname="Found Well"
                                clientphone="435 748 9883"
                                clientemail="found@gmail.com"
                                proemail="well@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-650cbccf2002c741aea60db4-profilePic/1698173702135.jpeg"
                            />
                        </Card>
                        <Card>
                            <Job
                                svcs="$333"
                                payout="$653"
                                clientname="Found Well"
                                clientphone="435 748 9883"
                                clientemail="found@gmail.com"
                                proemail="well@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-59e5d608acdb19d82a0e05a4-profilePic/1710826886624.jpeg"
                            />
                        </Card>
                    </TabsContent>
                </Tabs>
            </TabsContent>

            {/* Jobs Content with Nested Tabs */}
            <TabsContent value="jobs1" className="pl-4 space-y-1">
                <Tabs defaultValue="past-jobs">
                    {/* Nested Tabs */}
                    <TabsList className="flex space-x-5 mb-4">
                        <TabsTrigger value="past-jobs">Past Jobs1</TabsTrigger>
                        <TabsTrigger value="future-jobs">Future Jobs1</TabsTrigger>
                    </TabsList>

                    {/* Nested Tabs Content */}
                    <TabsContent value="past-jobs" className="space-y-2">
                        <Card>
                            <Job />
                        </Card>
                        <Card>
                            <Job />
                        </Card>
                    </TabsContent>

                    <TabsContent value="future-jobs" className="space-y-2">
                        <Card>
                            <Job />
                        </Card>
                        <Card>
                            <Job />
                        </Card>
                    </TabsContent>
                </Tabs>
            </TabsContent>
        </Tabs>
    )
}














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
// import { SidebarProvider, SidebarTrigger } from "../ui/sidebar"
// import { AppSidebar } from "../app-sidebar"
// import Dashboard from "../Dashboard"
// import Job from "../Job"

// export function TabComp() {
//     return (
//         <Tabs defaultValue="jobs" className="flex px-standardSize">
//             <TabsList className="flex flex-col space-y-5" >
//                 <TabsTrigger value="jobs">Jobs</TabsTrigger>
//             </TabsList>
//             <TabsContent value="jobs" className="pl-4 space-y-1">
//                 <Card>
//                     <Job />
//                 </Card>
//                 <Card>
//                     <Job />
//                 </Card>
//             </TabsContent>
//         </Tabs >
//     )
// }