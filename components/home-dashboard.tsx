import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Leaf,
    Camera,
    Bell,
    Plus,
    Sun,
    Droplet,
    ArrowRight,
} from "lucide-react";

export function HomeDashboard() {
    return (
        <div className="w-full max-w-sm">
            <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0">
                    {/* Phone frame */}
                    <div className="relative bg-background rounded-lg overflow-hidden border border-border shadow-md">
                        {/* Status bar */}
                        <div className="h-6 bg-primary/10 w-full"></div>

                        {/* Content */}
                        <div className="px-4 py-6 flex flex-col min-h-[600px]">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h1 className="text-2xl font-bold">
                                        Hello, Asma 🌿
                                    </h1>
                                    <p className="text-muted-foreground">
                                        Tuesday, April 22
                                    </p>
                                </div>
                                <div className="flex items-center gap-1 bg-accent/50 px-3 py-1 rounded-full">
                                    <Sun className="h-4 w-4 text-warning" />
                                    <span className="text-sm">19°C</span>
                                </div>
                            </div>

                            {/* Main cards */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <Card className="col-span-2 bg-primary/10 border-none">
                                    <CardContent className="p-4 flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium mb-1">
                                                Today's Tip
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Water your basil plant today
                                            </p>
                                        </div>
                                        <Droplet className="h-8 w-8 text-primary" />
                                    </CardContent>
                                </Card>

                                <Card className="border-primary/20">
                                    <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                                        <Leaf className="h-8 w-8 text-primary" />
                                        <h3 className="font-medium text-center">
                                            My Plants
                                        </h3>
                                        <Badge
                                            variant="outline"
                                            className="bg-primary/10 border-none"
                                        >
                                            8 plants
                                        </Badge>
                                    </CardContent>
                                </Card>

                                <Card className="border-primary/20">
                                    <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                                        <Camera className="h-8 w-8 text-primary" />
                                        <h3 className="font-medium text-center">
                                            Diagnostics
                                        </h3>
                                        <Badge
                                            variant="outline"
                                            className="bg-primary/10 border-none"
                                        >
                                            Scan plant
                                        </Badge>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Reminders section */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="text-xl font-semibold">
                                        Reminders
                                    </h2>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-primary flex items-center gap-1"
                                    >
                                        View all{" "}
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="space-y-3">
                                    <Card>
                                        <CardContent className="p-3 flex items-center gap-3">
                                            <div className="bg-accent rounded-full p-2">
                                                <Droplet className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium">
                                                    Water Basil
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Today
                                                </p>
                                            </div>
                                            <Button size="sm" variant="outline">
                                                Done
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-3 flex items-center gap-3">
                                            <div className="bg-accent rounded-full p-2">
                                                <Bell className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium">
                                                    Fertilize Mint
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Tomorrow
                                                </p>
                                            </div>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                disabled
                                            >
                                                Done
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            {/* Recent plants */}
                            <div>
                                <h2 className="text-xl font-semibold mb-3">
                                    Recent Plants
                                </h2>
                                <div className="flex gap-3 overflow-x-auto pb-2">
                                    {["Basil", "Mint", "Tomato"].map(
                                        (plant, index) => (
                                            <div
                                                key={index}
                                                className="flex-shrink-0 w-24"
                                            >
                                                <div className="bg-accent rounded-lg h-24 w-24 flex items-center justify-center mb-1">
                                                    <img
                                                        src={`/${plant}.jpg?height=60&width=60&text=${plant}`}
                                                        alt={plant}
                                                        className="h-16 w-16"
                                                    />
                                                </div>
                                                <p className="text-sm text-center">
                                                    {plant}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Floating action button with text */}
                            <div className="absolute bottom-6 right-6">
                                <Button
                                    size="lg"
                                    className="rounded-full shadow-lg px-4 gap-2"
                                    aria-label="Add new plant"
                                >
                                    <Plus className="h-5 w-5" />
                                    <span>Add Plant</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
