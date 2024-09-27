import PersonalSettings from "./PersonalSettings";
import ContactInformation from "./ContactInformation";

export default function ContactSettings() {
	return (
		<div className="flex justify-between space-x-8 mt-10 w-full">
			{/* Contact Information Section */}
			<ContactInformation />

			{/* Personal Settings Section */}
			<PersonalSettings />
		</div>
	);
}
