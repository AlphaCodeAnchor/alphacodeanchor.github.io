'use client'
import { Card, CardBody, CardHeader, Listbox, ListboxItem } from "@heroui/react";
import { Network, NotebookPen } from "lucide-react";

export default function Sidebar() {
    return (
        <Card
            className="w-[300px] min-h-screen border-r border-dashed border-default"
            radius="none"
            shadow="none"
        >
            <CardHeader></CardHeader>
            <CardBody>
                <Listbox variant="flat" aria-label="Actions" onAction={(key) => alert(key)}>
                    <ListboxItem key="workflow">
                        <div className="flex items-center gap-3">
                            <Network className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium">Development Workflow</span>
                        </div>
                    </ListboxItem>
                    <ListboxItem key="guide">
                        <div className="flex items-center gap-3">
                            <NotebookPen className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium">Contribution Guide</span>
                        </div>
                    </ListboxItem>
                </Listbox>
            </CardBody>
        </Card>
    );
}
