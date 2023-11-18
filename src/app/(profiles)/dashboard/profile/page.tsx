import { Separator } from "@/components/ui/separator"

import { ProfileForm } from "./profile-form"

export default function SettingsProfilePage() {
    return (
        <div className="flex w-full flex-col items-center px-4">
            <div className="w-full max-w-[600px] space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Profile</h3>
                    <p className="text-sm text-muted-foreground">
                        This is how others will see you on the site.
                    </p>
                </div>
                <Separator />
                <ProfileForm />
            </div>
        </div>
    )
}
