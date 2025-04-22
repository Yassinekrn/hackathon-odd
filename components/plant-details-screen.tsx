"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    ArrowLeft,
    Sun,
    Droplet,
    Thermometer,
    Calendar,
    Sparkles,
    Clock,
    CheckCircle2,
    Leaf,
    Loader2,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

interface PlantCareRecommendation {
    title: string;
    description: string;
    schedule?: string;
    importance: "high" | "medium" | "low";
}

interface PlantDetails {
    name: string;
    scientificName: string;
    type: string;
    description: string;
    difficulty: string;
    light: string;
    water: string;
    temperature: string;
    humidity: string;
    growthRate: string;
    imageUrl: string;
    careRecommendations?: PlantCareRecommendation[];
}

export function PlantDetailsScreen() {
    const [selectedPlantName, setSelectedPlantName] = useState<string | null>(
        null
    );
    const [plantDetails, setPlantDetails] = useState<PlantDetails | null>(null);
    const [activeTab, setActiveTab] = useState("overview");

    const [isGeneratingRecommendations, setIsGeneratingRecommendations] =
        useState(false);
    const [aiRecommendations, setAiRecommendations] = useState<
        PlantCareRecommendation[] | null
    >(null);

    const router = useRouter();

    // Fetch plant details on component mount
    useEffect(() => {
        // Try to get plant from localStorage, or use a default plant if nothing is found
        const storedPlant = localStorage.getItem("selectedPlant");
        if (storedPlant) {
            setSelectedPlantName(storedPlant);
            fetchPlantDetails(storedPlant);
        } else {
            // Provide a default plant if none was selected
            const defaultPlant = "Basil";
            setSelectedPlantName(defaultPlant);
            fetchPlantDetails(defaultPlant);
        }
    }, []);

    const fetchPlantDetails = (plantName: string) => {
        try {
            // This would be a real API call in a production app
            setTimeout(() => {
                const mockPlantData: PlantDetails = {
                    name: plantName || "Unknown Plant",
                    scientificName: plantName
                        ? `${plantName} scientificus`
                        : "Plantae unknown",
                    type: getPlantType(plantName || ""),
                    description: `${
                        plantName || "This plant"
                    } is a popular plant known for its beautiful appearance and easy care requirements.`,
                    difficulty: "Easy",
                    light: "Medium",
                    water: "Medium",
                    temperature: "65-80°F",
                    humidity: "Medium",
                    growthRate: "Moderate",
                    imageUrl: `/${plantName}.jpg?height=200&width=400&text=${encodeURIComponent(
                        plantName || "Plant"
                    )}`,
                };

                setPlantDetails(mockPlantData);
            }, 300);
        } catch (error) {
            console.error("Error fetching plant details:", error);
            // Set default plant details even if there's an error
            setPlantDetails({
                name: "Demo Plant",
                scientificName: "Plantae demonstratus",
                type: "Unknown",
                description: "A default plant for demonstration purposes.",
                difficulty: "Easy",
                light: "Medium",
                water: "Medium",
                temperature: "65-80°F",
                humidity: "Medium",
                growthRate: "Moderate",
                imageUrl:
                    "/placeholder.svg?height=200&width=200&text=Demo+Plant",
            });
        }
    };

    const getPlantType = (name: string): string => {
        const types: Record<string, string> = {
            Basil: "Herb",
            Mint: "Herb",
            "Aloe Vera": "Succulent",
            Tomato: "Vegetable",
            Lavender: "Herb",
            Strawberry: "Fruit",
            Cactus: "Succulent",
            "Peace Lily": "Flower",
        };

        return types[name] || "Unknown";
    };

    const generateAiRecommendations = () => {
        setIsGeneratingRecommendations(true);
        setAiRecommendations(null);

        // Simulate API call delay
        setTimeout(() => {
            const mockRecommendations: PlantCareRecommendation[] = [
                {
                    title: `Watering Schedule for ${plantDetails?.name}`,
                    description: `Water your ${plantDetails?.name} when the top inch of soil feels dry to the touch. Avoid overwatering as it can lead to root rot.`,
                    schedule:
                        plantDetails?.water === "Low"
                            ? "Every 10-14 days"
                            : plantDetails?.water === "Medium"
                            ? "Every 5-7 days"
                            : "Every 2-3 days",
                    importance: "high",
                },
                {
                    title: "Light Positioning",
                    description: `Place your ${
                        plantDetails?.name
                    } in an area with ${plantDetails?.light.toLowerCase()} light for optimal growth. Avoid direct sunlight during peak hours to prevent leaf burn.`,
                    importance: "medium",
                },
                {
                    title: "Seasonal Care",
                    description: `During winter months, reduce watering frequency by about 50% as growth slows down. Maintain consistent temperature and protect from cold drafts.`,
                    importance: "medium",
                },
                {
                    title: "Fertilization Guide",
                    description: `Feed your ${plantDetails?.name} with a balanced, water-soluble fertilizer diluted to half strength once every 4-6 weeks during growing season.`,
                    schedule: "Monthly during growing season",
                    importance: "low",
                },
            ];

            setAiRecommendations(mockRecommendations);
            setIsGeneratingRecommendations(false);
        }, 2500); // Longer delay to simulate AI processing
    };

    const handleGoBack = () => {
        router.back();
    };

    if (!plantDetails) {
        return (
            <div className="w-full max-w-sm flex items-center justify-center min-h-[600px]">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="w-full max-w-sm">
            <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0">
                    {/* Phone frame */}
                    <div className="relative bg-background rounded-lg overflow-hidden border border-border shadow-md">
                        {/* Status bar */}
                        <div className="h-6 bg-primary/10 w-full"></div>

                        {/* Content */}
                        <div className="flex flex-col min-h-[600px]">
                            {/* Header */}
                            <div className="px-4 py-3 flex justify-between items-center border-b">
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={handleGoBack}
                                        aria-label="Go back"
                                    >
                                        <ArrowLeft className="h-5 w-5" />
                                    </Button>
                                    <h1 className="text-xl font-bold">
                                        Plant Details
                                    </h1>
                                </div>
                            </div>

                            {/* Plant image and basic info */}
                            <div className="p-4 bg-accent/10 flex flex-col items-center text-center">
                                <div className="bg-background rounded-full p-1 mb-3">
                                    <div className="h-24 w-24 rounded-full bg-accent/50 flex items-center justify-center">
                                        <img
                                            src={plantDetails.imageUrl}
                                            alt={plantDetails.name}
                                            className="h-20 w-20 rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold mb-1">
                                    {plantDetails.name}
                                </h2>
                                <p className="text-sm text-muted-foreground italic mb-2">
                                    {plantDetails.scientificName}
                                </p>
                                <div className="flex gap-2">
                                    <Badge variant="outline">
                                        {plantDetails.type}
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className={
                                            plantDetails.difficulty === "Easy"
                                                ? "border-success/30 bg-success/10 text-success"
                                                : plantDetails.difficulty ===
                                                  "Medium"
                                                ? "border-warning/30 bg-warning/10 text-warning"
                                                : "border-destructive/30 bg-destructive/10 text-destructive"
                                        }
                                    >
                                        {plantDetails.difficulty}
                                    </Badge>
                                </div>
                            </div>

                            {/* Tabs for different sections */}
                            <Tabs
                                defaultValue="overview"
                                className="flex-1 flex flex-col"
                                value={activeTab}
                                onValueChange={setActiveTab}
                            >
                                <TabsList className="grid grid-cols-3 m-4 mb-0">
                                    <TabsTrigger value="overview">
                                        Overview
                                    </TabsTrigger>
                                    <TabsTrigger value="care">Care</TabsTrigger>
                                    <TabsTrigger value="tips">Tips</TabsTrigger>
                                </TabsList>

                                <TabsContent
                                    value="overview"
                                    className="flex-1 overflow-auto p-4 space-y-4"
                                >
                                    <div>
                                        <h3 className="font-medium mb-2">
                                            About
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {plantDetails.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-medium mb-2">
                                            Basic Care
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="p-3 bg-accent/20 rounded-lg flex flex-col items-center text-center">
                                                <Sun className="h-6 w-6 text-warning mb-1" />
                                                <span className="text-sm font-medium">
                                                    Light
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    {plantDetails.light}
                                                </span>
                                            </div>
                                            <div className="p-3 bg-accent/20 rounded-lg flex flex-col items-center text-center">
                                                <Droplet className="h-6 w-6 text-primary mb-1" />
                                                <span className="text-sm font-medium">
                                                    Water
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    {plantDetails.water}
                                                </span>
                                            </div>
                                            <div className="p-3 bg-accent/20 rounded-lg flex flex-col items-center text-center">
                                                <Thermometer className="h-6 w-6 text-destructive mb-1" />
                                                <span className="text-sm font-medium">
                                                    Temperature
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    {plantDetails.temperature}
                                                </span>
                                            </div>
                                            <div className="p-3 bg-accent/20 rounded-lg flex flex-col items-center text-center">
                                                <Calendar className="h-6 w-6 text-muted-foreground mb-1" />
                                                <span className="text-sm font-medium">
                                                    Growth Rate
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    {plantDetails.growthRate}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent
                                    value="care"
                                    className="flex-1 overflow-auto p-4 space-y-4"
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-medium">
                                            Care Recommendations
                                        </h3>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="h-8 gap-1"
                                            onClick={generateAiRecommendations}
                                            disabled={
                                                isGeneratingRecommendations
                                            }
                                        >
                                            {isGeneratingRecommendations ? (
                                                <Loader2 className="h-3 w-3 animate-spin" />
                                            ) : (
                                                <Sparkles className="h-3 w-3" />
                                            )}
                                            Generate with AI
                                        </Button>
                                    </div>

                                    {/* AI Recommendations Area */}
                                    <div className="space-y-3">
                                        {/* Empty state or loading state */}
                                        {!aiRecommendations &&
                                            !isGeneratingRecommendations && (
                                                <div className="bg-accent/30 p-6 rounded-lg text-center h-40 flex flex-col items-center justify-center">
                                                    <Sparkles className="h-10 w-10 text-primary/30 mb-2" />
                                                    <p className="text-sm text-muted-foreground">
                                                        Generate AI
                                                        recommendations tailored
                                                        to your plant and
                                                        environment.
                                                    </p>
                                                </div>
                                            )}

                                        {/* Loading state */}
                                        {isGeneratingRecommendations && (
                                            <div className="bg-accent/20 p-6 rounded-lg space-y-5 animate-pulse">
                                                <div className="flex justify-between items-center mb-2">
                                                    <div className="h-4 bg-accent/50 rounded w-1/3"></div>
                                                    <div className="h-3 bg-accent/30 rounded w-1/5"></div>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="h-3 bg-accent/40 rounded w-full"></div>
                                                    <div className="h-3 bg-accent/40 rounded w-5/6"></div>
                                                    <div className="h-3 bg-accent/40 rounded w-4/5"></div>
                                                </div>
                                                <div className="pt-2">
                                                    <div className="h-2 bg-accent/30 rounded w-1/4"></div>
                                                </div>

                                                {/* Second skeleton item */}
                                                <div className="flex justify-between items-center mb-2 pt-3">
                                                    <div className="h-4 bg-accent/50 rounded w-2/5"></div>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="h-3 bg-accent/40 rounded w-full"></div>
                                                    <div className="h-3 bg-accent/40 rounded w-3/4"></div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Actual recommendations */}
                                        {aiRecommendations &&
                                            !isGeneratingRecommendations &&
                                            aiRecommendations.map((rec, i) => (
                                                <Card
                                                    key={i}
                                                    className="overflow-hidden"
                                                >
                                                    <CardContent className="p-4">
                                                        <div className="flex justify-between items-start">
                                                            <h4 className="font-medium">
                                                                {rec.title}
                                                            </h4>
                                                            <Badge
                                                                className={
                                                                    rec.importance ===
                                                                    "high"
                                                                        ? "bg-destructive/10 text-destructive"
                                                                        : rec.importance ===
                                                                          "medium"
                                                                        ? "bg-warning/10 text-warning"
                                                                        : "bg-primary/10 text-primary"
                                                                }
                                                            >
                                                                {rec.importance
                                                                    .charAt(0)
                                                                    .toUpperCase() +
                                                                    rec.importance.slice(
                                                                        1
                                                                    )}
                                                            </Badge>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground mt-2 mb-3">
                                                            {rec.description}
                                                        </p>
                                                        {rec.schedule && (
                                                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                                <Clock className="h-3 w-3" />
                                                                <span>
                                                                    {
                                                                        rec.schedule
                                                                    }
                                                                </span>
                                                            </div>
                                                        )}
                                                    </CardContent>
                                                </Card>
                                            ))}
                                    </div>
                                </TabsContent>

                                <TabsContent
                                    value="tips"
                                    className="flex-1 overflow-auto p-4 space-y-4"
                                >
                                    <div>
                                        <h3 className="font-medium mb-2">
                                            Growth Tips
                                        </h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                                                <p className="text-sm text-muted-foreground">
                                                    Rotate your{" "}
                                                    {plantDetails.name}{" "}
                                                    regularly to ensure even
                                                    growth as it reaches for
                                                    light.
                                                </p>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                                                <p className="text-sm text-muted-foreground">
                                                    When repotting, choose a
                                                    container only slightly
                                                    larger than the current one
                                                    to prevent overwatering
                                                    issues.
                                                </p>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                                                <p className="text-sm text-muted-foreground">
                                                    {plantDetails.name} prefers{" "}
                                                    {plantDetails.humidity.toLowerCase()}{" "}
                                                    humidity levels. Consider
                                                    using a pebble tray or
                                                    humidifier if your home is
                                                    dry.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-medium mb-2">
                                            Common Issues
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="border rounded-lg p-3">
                                                <h4 className="text-sm font-medium mb-1">
                                                    Yellowing Leaves
                                                </h4>
                                                <p className="text-xs text-muted-foreground">
                                                    Usually a sign of
                                                    overwatering. Allow soil to
                                                    dry slightly between
                                                    waterings and ensure pot has
                                                    drainage holes.
                                                </p>
                                            </div>
                                            <div className="border rounded-lg p-3">
                                                <h4 className="text-sm font-medium mb-1">
                                                    Leggy Growth
                                                </h4>
                                                <p className="text-xs text-muted-foreground">
                                                    Indicates insufficient
                                                    light. Move your{" "}
                                                    {plantDetails.name} to a
                                                    brighter location, but avoid
                                                    direct harsh sunlight.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
