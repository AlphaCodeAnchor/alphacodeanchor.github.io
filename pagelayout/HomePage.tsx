'use client'
import EntryPointCard from "@/components/EntryPointCard"
import { AccountTreeRounded } from "@mui/icons-material"
import CloudSyncRoundedIcon from '@mui/icons-material/CloudSyncRounded';

export default function HomePage() {


    return (
        <div className="h-screen justify-center flex items-center">
            <div className="grid grid-cols-2 gap-10 w-[70%] h-[30%]">
                <div className="w-full h-full">
                    <EntryPointCard
                        title="Dev Workflow"
                        icon={<AccountTreeRounded sx={{ fontSize: 80 }} className="text-primary-500" />}
                        link="/workflow"
                    />
                </div>
                <div className="w-full h-full">
                    <EntryPointCard
                        title="Contribution Guide"
                        icon={<CloudSyncRoundedIcon sx={{ fontSize: 80 }} className="text-primary-500" />}
                        link="contribution"
                    />
                </div>
            </div>
        </div>
    )
}

