'use client';

import { Card, CardBody, CardHeader, Listbox, ListboxItem } from "@heroui/react";
import { AccountTreeRounded } from "@mui/icons-material";
import CloudSyncRoundedIcon from "@mui/icons-material/CloudSyncRounded";
import AddHomeRoundedIcon from "@mui/icons-material/AddHomeRounded";
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();

    const handleAction = (key: string | number) => {
        switch (key) {
            case "home":
                router.push("/");
                break;
            case "workflow":
                router.push("/workflow");
                break;
            case "guide":
                router.push("/contribution");
                break;
            default:
                break;
        }
    };

    return (
        <Card className="w-[300px] min-h-screen" radius="none">
            <CardHeader></CardHeader>
            <CardBody>
                <Listbox variant="flat" aria-label="Actions" onAction={handleAction}>
                    <ListboxItem key="home">
                        <div className="flex items-center gap-3">
                            <AddHomeRoundedIcon className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium">Home</span>
                        </div>
                    </ListboxItem>
                    <ListboxItem key="workflow">
                        <div className="flex items-center gap-3">
                            <AccountTreeRounded className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium">Development Workflow</span>
                        </div>
                    </ListboxItem>
                    <ListboxItem key="guide">
                        <div className="flex items-center gap-3">
                            <CloudSyncRoundedIcon className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium">Contribution Guide</span>
                        </div>
                    </ListboxItem>
                </Listbox>
            </CardBody>
        </Card>
    );
}
