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
import Client from "../Client"

export function TabComp() {
    return (
        <Tabs defaultValue="jobs" className="flex px-standardSize">
            {/* Main Tabs */}
            <div className="flex flex-col">
                <TabsList className="flex flex-col space-y-5 w-full w-full">
                    <TabsTrigger value="jobs">Jobs List</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="jobs1">Clients List</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="agent">Agents List</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="service">Services Management</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="promotion">Promotions</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="giftcard">Gift Card</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="review-changes">Review Changes</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="live-table">Live Table</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="referral">Referrals</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="convos">Convos</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="corporate">Corporate Accounts</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="regions">Regions MGMT</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="subregion">SubRegion MGMT</TabsTrigger>
                </TabsList>
            </div>

            {/* Jobs Content with Nested Tabs */}
            <TabsContent value="jobs" className="pl-4 space-y-1">
                <Tabs defaultValue="past-jobs">
                    {/* Nested Tabs */}
                    <TabsList className="flex space-x-5 mb-4 w-full">
                        <TabsTrigger value="past-jobs">Today&apos;s Jobs (195)</TabsTrigger>
                        <TabsTrigger value="future-jobs">Tomorrow&apos;s Jobs (44)</TabsTrigger>
                        <TabsTrigger value="yesterday-jobs">Yesterday&apos;s Jobs (44)</TabsTrigger>
                        <TabsTrigger value="cant-find-jobs">Can&apos;t find job?</TabsTrigger>
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
                    <TabsList className="flex space-x-5 mb-4 w-full">
                        <TabsTrigger value="past-jobs">Clients Cancel</TabsTrigger>
                        <TabsTrigger value="future-jobs">Future Clients</TabsTrigger>
                    </TabsList>

                    {/* Nested Tabs Content */}
                    <TabsContent value="past-jobs" className="space-y-2">
                        <Card>
                            <Client
                                svcs="$180"
                                payout="$244"
                                clientname="Cheap Tester"
                                clientphone="435 748 9883"
                                clientemail="a@gmail.com"
                                proemail="tester@me.com"
                                proephone="434 845 8738"
                                gender="male"
                                status="online"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-5cf6fac15c883cc930bb112a-profilePic/1738651803597.jpeg"
                            />
                        </Card>
                        <Card>
                            <Client
                                svcs="$180"
                                payout="$244"
                                clientname="Cheap Tester"
                                clientphone="435 748 9883"
                                clientemail="a@gmail.com"
                                proname="Tester Cheap"
                                proemail="testeress@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                status="offline"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-65c51a480709072fc9edb867-profilePic/1708439130426.jpeg"
                            />
                        </Card>
                    </TabsContent>

                    <TabsContent value="future-jobs" className="space-y-2">
                        <Card>
                            <Client
                                svcs="$180"
                                payout="$244"
                                clientname="Cheap Tester"
                                clientphone="435 748 9883"
                                clientemail="a@gmail.com"
                                proemail="tester@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                status="offline"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-60381ebd4cd7ef60566c9fc7-profilePic/1739003549638.jpeg"
                            />
                        </Card>
                        <Card>
                            <Client
                                svcs="$180"
                                payout="$244"
                                clientname="Cheap Tester"
                                clientphone="435 748 9883"
                                clientemail="a@gmail.com"
                                proname="Tester Cheap"
                                proemail="testeress@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                status="online"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-5c1f038c80a72f0178fdfa19-profilePic/1665599195558.jpeg"
                            />
                        </Card>
                    </TabsContent>

                </Tabs>
            </TabsContent>

            {/* Jobs Content with Nested Tabs */}
            <TabsContent value="agent" className="pl-4 space-y-1">
                <Tabs defaultValue="past-jobs">
                    {/* Nested Tabs */}
                    <TabsList className="flex space-x-5 mb-4 w-full">
                        <TabsTrigger value="past-jobs">Agents Cancel</TabsTrigger>
                        <TabsTrigger value="future-jobs">Future Agents</TabsTrigger>
                    </TabsList>

                    {/* Nested Tabs Content */}
                    <TabsContent value="past-jobs" className="space-y-2">
                        <Card>
                            <Client
                                svcs="$180"
                                payout="$244"
                                clientname="Cheap Tester"
                                clientphone="435 748 9883"
                                clientemail="a@gmail.com"
                                proemail="tester@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                status="offline"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-60381ebd4cd7ef60566c9fc7-profilePic/1739003549638.jpeg"
                            />
                        </Card>
                        <Card>
                            <Client
                                svcs="$180"
                                payout="$244"
                                clientname="Cheap Tester"
                                clientphone="435 748 9883"
                                clientemail="a@gmail.com"
                                proname="Tester Cheap"
                                proemail="testeress@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                status="online"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-5c1f038c80a72f0178fdfa19-profilePic/1665599195558.jpeg"
                            />
                        </Card>
                    </TabsContent>

                    <TabsContent value="future-jobs" className="space-y-2">
                        <Card>
                            <Client
                                svcs="$180"
                                payout="$244"
                                clientname="Cheap Tester"
                                clientphone="435 748 9883"
                                clientemail="a@gmail.com"
                                proemail="tester@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                status="offline"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-60381ebd4cd7ef60566c9fc7-profilePic/1739003549638.jpeg"
                            />
                        </Card>
                        <Card>
                            <Client
                                svcs="$180"
                                payout="$244"
                                clientname="Cheap Tester"
                                clientphone="435 748 9883"
                                clientemail="a@gmail.com"
                                proname="Tester Cheap"
                                proemail="testeress@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                status="online"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-5c1f038c80a72f0178fdfa19-profilePic/1665599195558.jpeg"
                            />
                        </Card>
                    </TabsContent>
                    <TabsContent value="services" className="space-y-2">
                        <Card>
                            <Client
                                svcs="$180"
                                payout="$244"
                                clientname="Cheap Tester"
                                clientphone="435 748 9883"
                                clientemail="a@gmail.com"
                                proemail="tester@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                status="offline"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-60381ebd4cd7ef60566c9fc7-profilePic/1739003549638.jpeg"
                            />
                        </Card>
                        <Card>
                            <Client
                                svcs="$180"
                                payout="$244"
                                clientname="Cheap Tester"
                                clientphone="435 748 9883"
                                clientemail="a@gmail.com"
                                proname="Tester Cheap"
                                proemail="testeress@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                status="online"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-5c1f038c80a72f0178fdfa19-profilePic/1665599195558.jpeg"
                            />
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