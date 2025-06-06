"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function OnboardingScreen() {
    const [locationStep, setLocationStep] = useState<
        "intro" | "permission" | "manual"
    >("intro");
    const [manualLocation, setManualLocation] = useState("");
    const router = useRouter();

    const requestLocationPermission = () => {
        setLocationStep("permission");
        // In a real app, this would trigger the browser's geolocation permission
    };

    const handleManualLocation = () => {
        setLocationStep("manual");
    };

    const handleContinue = () => {
        // Save the location in localStorage and navigate to dashboard
        if (manualLocation.trim()) {
            localStorage.setItem("userLocation", manualLocation.trim());
        }
        router.push("/dashboard");
    };

    const handleSkip = () => {
        // If user entered a location manually but then skips, still save it
        if (locationStep === "manual" && manualLocation.trim()) {
            localStorage.setItem("userLocation", manualLocation.trim());
        }
        router.push("/dashboard");
    };

    return (
        <div className="w-full max-w-sm">
            <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0">
                    {/* Phone frame */}
                    <div className="relative bg-background rounded-lg overflow-hidden border border-border shadow-md">
                        {/* Status bar */}
                        <div className="h-6 bg-primary/10 w-full"></div>

                        {/* Content */}
                        <div className="px-6 py-8 flex flex-col items-center min-h-[600px]">
                            {/* Plant illustration */}
                            <div className="w-48 h-48 bg-accent rounded-full flex items-center justify-center mb-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-map-icon lucide-map h-24 w-24 text-primary"
                                >
                                    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
                                    <path d="M15 5.764v15" />
                                    <path d="M9 3.236v15" />
                                </svg>
                            </div>

                            {locationStep === "intro" && (
                                <>
                                    {/* Geo-Analysis content */}
                                    <div className="text-center mb-8">
                                        <div className="flex justify-center mb-6">
                                            <MapPin className="h-12 w-12 text-primary" />
                                        </div>
                                        <h2 className="text-2xl font-bold mb-3">
                                            Geo-Analysis
                                        </h2>
                                        <p className="text-lg text-muted-foreground">
                                            PlantPal analyzes your location to
                                            recommend plants that thrive in your
                                            local climate.
                                        </p>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="w-full mt-auto">
                                        <Button
                                            onClick={requestLocationPermission}
                                            className="w-full mb-3"
                                        >
                                            Allow Location Access
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={handleManualLocation}
                                            className="w-full"
                                        >
                                            Enter Location Manually
                                        </Button>
                                    </div>
                                </>
                            )}

                            {locationStep === "permission" && (
                                <>
                                    {/* Permission request content */}
                                    <div className="text-center mb-8">
                                        <div className="flex justify-center mb-6">
                                            <MapPin className="h-12 w-12 text-primary" />
                                        </div>
                                        <h2 className="text-2xl font-bold mb-3">
                                            Location Access
                                        </h2>
                                        <p className="text-lg text-muted-foreground mb-4">
                                            PlantPal would like to access your
                                            location to provide plant
                                            recommendations for your climate.
                                        </p>
                                        <div className="p-4 border rounded-lg bg-accent/30 mb-4">
                                            <p className="text-sm">
                                                This would normally trigger your
                                                browser's location permission
                                                dialog. For this demo, we'll
                                                simulate approval.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="w-full mt-auto">
                                        <Button
                                            className="w-full mb-3"
                                            onClick={handleContinue}
                                        >
                                            Allow
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={handleManualLocation}
                                            className="w-full"
                                        >
                                            Deny & Enter Manually
                                        </Button>
                                    </div>
                                </>
                            )}

                            {locationStep === "manual" && (
                                <>
                                    {/* Manual location entry */}
                                    <div className="text-center mb-8 w-full">
                                        <div className="flex justify-center mb-6">
                                            <MapPin className="h-12 w-12 text-primary" />
                                        </div>
                                        <h2 className="text-2xl font-bold mb-3">
                                            Enter Your Location
                                        </h2>
                                        <p className="text-lg text-muted-foreground mb-6">
                                            Please enter your country or city to
                                            get plant recommendations for your
                                            climate.
                                        </p>

                                        <div className="space-y-4">
                                            <div className="space-y-2 text-left">
                                                <Label htmlFor="location">
                                                    Your Location
                                                </Label>
                                                <Input
                                                    id="location"
                                                    placeholder="e.g., Tunis, Tunisia"
                                                    value={manualLocation}
                                                    onChange={(e) =>
                                                        setManualLocation(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action button */}
                                    <div className="w-full mt-auto">
                                        <Button
                                            onClick={handleContinue}
                                            className="w-full"
                                            disabled={!manualLocation.trim()}
                                        >
                                            Continue{" "}
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </>
                            )}

                            {/* Skip button */}
                            <Button
                                variant="link"
                                size="sm"
                                className="mt-4 text-muted-foreground"
                                onClick={handleSkip}
                            >
                                Skip
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
