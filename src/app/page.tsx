import { prisma } from "../db";
import { Button, Text } from "./components/atoms";
import { ContactList, ContactModal } from "./components/organisms";

export default async function Home() {
  const contacts = await prisma.contact.findMany();

  return (
    <div className="h-screen bg-black grid grid-rows-[96px_96px_1fr] grid-cols-12 lg:divide-x-[1px] lg:divide-y-[1px] divide-black-60 lg:grid-cols-4">
      <div className="col-span-1 hidden lg:block" />
      <div className="col-span-10 hidden lg:block lg:col-span-2" />
      <div className="col-span-1 hidden lg:block" />
      <div className="flex col-span-1 items-center justify-end px-1 lg:px-6">
        <Button variant="secondary" icon="backArrow" />
      </div>
      <div className="col-span-10 flex items-center justify-between px-1 lg:col-span-2 lg:px-6">
        <Text type="h1" className="text-[24px] lg:text-[32px]">
          Contacts
        </Text>
        <div className="flex gap-1">
          <Button variant="secondary" icon="settings" />
          <Button variant="secondary" icon="change" className="lg:mr-4" />
          <Button variant="special" icon="add">
            Add new
          </Button>
        </div>
      </div>
      <div className="flex col-span-1 items-center justify-start px-1 lg:px-6">
        <Button variant="secondary" icon="lightMode" />
      </div>
      <div className="col-span-1" />
      <ContactList contacts={contacts} className="col-span-10 lg:col-span-2 px-1 py-3 lg:px-6" />
      <div className="col-span-1" />
      {/* <ContactModal isOpen onClose={() => {}} /> */}
    </div>
  );
}
