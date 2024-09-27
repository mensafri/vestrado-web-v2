import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInformation from "./PersonalInformation";
import ContactSettings from "./ContactSettings";

export default function ProfileTabs() {
	return (
		<div className="p-6 end-full">
			<Tabs defaultValue="profile">
				<TabsList>
					<TabsTrigger value="profile">Profile</TabsTrigger>
					<TabsTrigger value="upload-documents">Upload Documents</TabsTrigger>
					<TabsTrigger value="my-agreement">My Agreement</TabsTrigger>
					<TabsTrigger value="messages">Messages</TabsTrigger>
					<TabsTrigger value="help-desk">Help Desk</TabsTrigger>
					<TabsTrigger value="tfa">Two-Factor Authentication</TabsTrigger>
				</TabsList>

				<TabsContent value="profile">
					<div className="w-full">
						<PersonalInformation />
						<ContactSettings />
					</div>
				</TabsContent>

				<TabsContent value="upload-documents"></TabsContent>

				<TabsContent value="my-agreement"></TabsContent>

				<TabsContent value="messages"></TabsContent>

				<TabsContent value="help-desk"></TabsContent>

				<TabsContent value="tfa"></TabsContent>
			</Tabs>
		</div>
	);
}
