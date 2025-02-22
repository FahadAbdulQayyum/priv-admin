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