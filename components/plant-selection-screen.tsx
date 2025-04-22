"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
    ArrowLeft,
    Filter,
    Sun,
    Droplet,
    Home,
    Leaf,
    X,
    Check,
    Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

type PlantType = "Herb" | "Vegetable" | "Fruit" | "Flower" | "Succulent";
type LightLevel = "Low" | "Medium" | "High";
type WaterLevel = "Low" | "Medium" | "High";
type DifficultyLevel = "Easy" | "Medium" | "Hard";

interface Plant {
    name: string;
    type: string;
    difficulty: string;
    space: string;
    light: string;
    water: string;
    indoor: boolean;
    match?: string;
}

export function PlantSelectionScreen() {
    // UI state
    const [showFilters, setShowFilters] = useState(false);
    const [selectedPlant, setSelectedPlant] = useState<string | null>(null);
    const [showAiRecommendations, setShowAiRecommendations] = useState(false);

    // Filter states
    const [lightRequirement, setLightRequirement] = useState<number>(50);
    const [waterRequirement, setWaterRequirement] = useState<number>(25);
    const [indoorOnly, setIndoorOnly] = useState<boolean>(true);
    const [edibleOnly, setEdibleOnly] = useState<boolean>(false);
    const [selectedTypes, setSelectedTypes] = useState<PlantType[]>(["Herb"]);

    // Filtered plants and active filters
    const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const router = useRouter();

    // All available plants
    const allPlants: Plant[] = [
        {
            name: "Basil",
            type: "Herb",
            difficulty: "Easy",
            space: "Small",
            light: "Medium",
            water: "Medium",
            indoor: true,
            match: "98%",
        },
        {
            name: "Mint",
            type: "Herb",
            difficulty: "Easy",
            space: "Small",
            light: "Medium",
            water: "High",
            indoor: true,
            match: "95%",
        },
        {
            name: "Aloe Vera",
            type: "Succulent",
            difficulty: "Easy",
            space: "Small",
            light: "Medium",
            water: "Low",
            indoor: true,
            match: "92%",
        },
        {
            name: "Tomato",
            type: "Vegetable",
            difficulty: "Medium",
            space: "Medium",
            light: "High",
            water: "Medium",
            indoor: false,
        },
        {
            name: "Lavender",
            type: "Herb",
            difficulty: "Medium",
            space: "Small",
            light: "High",
            water: "Low",
            indoor: true,
        },
        {
            name: "Strawberry",
            type: "Fruit",
            difficulty: "Medium",
            space: "Medium",
            light: "High",
            water: "Medium",
            indoor: false,
        },
        {
            name: "Cactus",
            type: "Succulent",
            difficulty: "Easy",
            space: "Small",
            light: "High",
            water: "Low",
            indoor: true,
        },
        {
            name: "Peace Lily",
            type: "Flower",
            difficulty: "Easy",
            space: "Medium",
            light: "Low",
            water: "Medium",
            indoor: true,
        },
    ];

    // Convert slider value to light/water level
    const getLightLevel = (value: number): LightLevel => {
        if (value < 33) return "Low";
        if (value < 66) return "Medium";
        return "High";
    };

    const getWaterLevel = (value: number): WaterLevel => {
        if (value < 33) return "Low";
        if (value < 66) return "Medium";
        return "High";
    };

    // Apply filters to plants
    const applyFilters = () => {
        const lightLevel = getLightLevel(lightRequirement);
        const waterLevel = getWaterLevel(waterRequirement);

        const filtered = allPlants.filter((plant) => {
            // Apply indoor filter
            if (indoorOnly && !plant.indoor) return false;

            // Apply edible filter
            if (
                edibleOnly &&
                !["Herb", "Vegetable", "Fruit"].includes(plant.type)
            )
                return false;

            // Apply plant type filter
            if (
                selectedTypes.length > 0 &&
                !selectedTypes.includes(plant.type as PlantType)
            )
                return false;

            // Apply light requirement filter (allow one level of difference)
            const plantLightLevels = ["Low", "Medium", "High"];
            const lightIndex = plantLightLevels.indexOf(plant.light);
            const targetLightIndex = plantLightLevels.indexOf(lightLevel);
            if (Math.abs(lightIndex - targetLightIndex) > 1) return false;

            // Apply water requirement filter (allow one level of difference)
            const plantWaterLevels = ["Low", "Medium", "High"];
            const waterIndex = plantWaterLevels.indexOf(plant.water);
            const targetWaterIndex = plantWaterLevels.indexOf(waterLevel);
            if (Math.abs(waterIndex - targetWaterIndex) > 1) return false;

            // All filters passed
            return true;
        });

        // Sort by match score and add match percentages if missing
        const sortedFiltered = filtered
            .map((plant) => {
                if (!plant.match) {
                    // Calculate match score based on how well the plant matches the filters
                    let matchScore = 80 + Math.floor(Math.random() * 15); // Base score between 80-95%
                    if (plant.light === lightLevel) matchScore += 1;
                    if (plant.water === waterLevel) matchScore += 1;
                    if (plant.indoor === indoorOnly) matchScore += 1;
                    if (selectedTypes.includes(plant.type as PlantType))
                        matchScore += 1;
                    if (matchScore > 99) matchScore = 99;

                    return { ...plant, match: `${matchScore}%` };
                }
                return plant;
            })
            .sort((a, b) => {
                const aMatch = parseInt(a.match!.replace("%", ""));
                const bMatch = parseInt(b.match!.replace("%", ""));
                return bMatch - aMatch;
            });

        setFilteredPlants(sortedFiltered);

        // Update active filters
        const filters: string[] = [];

        if (indoorOnly) filters.push("Indoor");
        if (edibleOnly) filters.push("Edible");
        if (selectedTypes.length > 0) filters.push(...selectedTypes);
        if (lightLevel !== "Medium") filters.push(`${lightLevel} Light`);
        if (waterLevel !== "Medium") filters.push(`${waterLevel} Water`);

        setActiveFilters(filters);
    };

    // Effect to apply filters when component mounts
    useEffect(() => {
        applyFilters();
    }, []);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const selectPlant = (name: string) => {
        setSelectedPlant(name === selectedPlant ? null : name);
    };

    const getAiRecommendations = () => {
        // Prepare data with filters and location
        const recommendationData = {
            light: getLightLevel(lightRequirement),
            water: getWaterLevel(waterRequirement),
            indoorOnly,
            edibleOnly,
            selectedTypes,
            location: {
                city: "Tunis",
                region: "Tunis Governorate",
                country: "Tunisia",
                latitude: 36.81897,
                longitude: 10.16579,
            },
        };

        // Log current filter settings with location
        console.log("AI Recommendations with filters:", recommendationData);

        // Send data to recommendation endpoint
        fetch("http://localhost:8000/rec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recommendationData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Recommendation API response:", data);
                // Apply filters and show recommendations
                applyFilters();
                setShowAiRecommendations(true);
            })
            .catch((error) => {
                console.error("Error fetching recommendations:", error);
                // Still show recommendations using local filters if API fails
                applyFilters();
                setShowAiRecommendations(true);
            });
    };

    const resetFilters = () => {
        setLightRequirement(50);
        setWaterRequirement(25);
        setIndoorOnly(true);
        setEdibleOnly(false);
        setSelectedTypes(["Herb"]);
    };

    const toggleType = (type: PlantType) => {
        if (selectedTypes.includes(type)) {
            setSelectedTypes(selectedTypes.filter((t) => t !== type));
        } else {
            setSelectedTypes([...selectedTypes, type]);
        }
    };

    const removeFilter = (filter: string) => {
        // Remove the specific filter
        if (filter === "Indoor") {
            setIndoorOnly(false);
        } else if (filter === "Edible") {
            setEdibleOnly(false);
        } else if (filter.includes("Light")) {
            setLightRequirement(50); // Reset to medium
        } else if (filter.includes("Water")) {
            setWaterRequirement(25); // Reset to low-medium
        } else if (
            ["Herb", "Vegetable", "Fruit", "Flower", "Succulent"].includes(
                filter
            )
        ) {
            setSelectedTypes(selectedTypes.filter((type) => type !== filter));
        }

        // Re-apply filters
        applyFilters();
    };

    const clearAllFilters = () => {
        resetFilters();
        applyFilters();
    };

    const handleApplyFilters = () => {
        applyFilters();
        setShowFilters(false);
    };

    const handleSelectThisPlant = () => {
        if (selectedPlant) {
            // Navigate to dashboard with selected plant
            localStorage.setItem("selectedPlant", selectedPlant);
            router.push("/dashboard");
        }
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
                        <div className="flex flex-col min-h-[600px]">
                            {/* Header */}
                            <div className="px-4 py-3 flex justify-between items-center border-b">
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        aria-label="Go back"
                                    >
                                        <ArrowLeft className="h-5 w-5" />
                                    </Button>
                                    <h1 className="text-xl font-bold">
                                        Find Your Plant
                                    </h1>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={toggleFilters}
                                    aria-label="Toggle filters"
                                >
                                    <Filter className="h-5 w-5" />
                                </Button>
                            </div>

                            {/* AI Recommendations */}
                            <div className="p-4 border-b">
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="font-medium">
                                        Best Plants for You
                                    </h2>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-8 gap-1"
                                        onClick={getAiRecommendations}
                                    >
                                        <Sparkles className="h-4 w-4" /> AI
                                        Recommend
                                    </Button>
                                </div>

                                {!showAiRecommendations ? (
                                    <div className="bg-accent/30 p-3 rounded-lg text-center">
                                        <p className="text-sm text-muted-foreground">
                                            Click the button to get
                                            AI-recommended plants based on your
                                            location and preferences.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        {filteredPlants
                                            .slice(0, 3)
                                            .map((plant) => (
                                                <Card
                                                    key={plant.name}
                                                    className={`cursor-pointer transition-all overflow-hidden ${
                                                        selectedPlant ===
                                                        plant.name
                                                            ? "ring-2 ring-primary"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        selectPlant(plant.name)
                                                    }
                                                >
                                                    <CardContent className="p-3 flex items-start gap-3">
                                                        <div className="bg-accent/50 rounded-lg h-16 w-16 flex-shrink-0 flex items-center justify-center">
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
                                                                className="lucide lucide-sprout-icon lucide-sprout h-6 w-6 text-secondary"
                                                            >
                                                                <path d="M7 20h10" />
                                                                <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                                                                <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                                                                <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex justify-between items-start">
                                                                <h3 className="font-medium">
                                                                    {plant.name}
                                                                </h3>
                                                                <Badge className="bg-success/10 text-success">
                                                                    {
                                                                        plant.match
                                                                    }
                                                                </Badge>
                                                            </div>
                                                            <div className="flex flex-wrap gap-1 mt-1 mb-2">
                                                                <Badge
                                                                    variant="outline"
                                                                    className="text-xs px-1 py-0 h-5"
                                                                >
                                                                    {plant.type}
                                                                </Badge>
                                                                {plant.indoor && (
                                                                    <Badge
                                                                        variant="outline"
                                                                        className="text-xs px-1 py-0 h-5 bg-accent/50"
                                                                    >
                                                                        Indoor
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <div
                                                                    className="flex items-center gap-1"
                                                                    title="Light requirement"
                                                                >
                                                                    <Sun className="h-3 w-3 text-warning" />
                                                                    <span className="text-xs">
                                                                        {
                                                                            plant.light
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    className="flex items-center gap-1"
                                                                    title="Water requirement"
                                                                >
                                                                    <Droplet className="h-3 w-3 text-primary" />
                                                                    <span className="text-xs">
                                                                        {
                                                                            plant.water
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    className="flex items-center gap-1"
                                                                    title="Difficulty"
                                                                >
                                                                    <Leaf className="h-3 w-3 text-primary" />
                                                                    <span className="text-xs">
                                                                        {
                                                                            plant.difficulty
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {selectedPlant ===
                                                            plant.name && (
                                                            <div className="bg-primary text-white rounded-full p-0.5">
                                                                <Check className="h-4 w-4" />
                                                            </div>
                                                        )}
                                                    </CardContent>
                                                </Card>
                                            ))}
                                    </div>
                                )}
                            </div>

                            {/* Filters */}
                            {showFilters && (
                                <div className="p-4 border-b bg-accent/20 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h2 className="font-medium">Filters</h2>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 text-muted-foreground"
                                            onClick={resetFilters}
                                        >
                                            Reset
                                        </Button>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <Label className="flex items-center gap-1">
                                                    <Sun className="h-4 w-4 text-warning" />{" "}
                                                    Light Requirement
                                                </Label>
                                                <span className="text-xs text-muted-foreground">
                                                    {getLightLevel(
                                                        lightRequirement
                                                    )}
                                                </span>
                                            </div>
                                            <Slider
                                                value={[lightRequirement]}
                                                max={100}
                                                step={1}
                                                className="w-full"
                                                onValueChange={(values) =>
                                                    setLightRequirement(
                                                        values[0]
                                                    )
                                                }
                                            />
                                            <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                                                <span>Low</span>
                                                <span>Medium</span>
                                                <span>High</span>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <Label className="flex items-center gap-1">
                                                    <Droplet className="h-4 w-4 text-primary" />{" "}
                                                    Water Requirement
                                                </Label>
                                                <span className="text-xs text-muted-foreground">
                                                    {getWaterLevel(
                                                        waterRequirement
                                                    )}
                                                </span>
                                            </div>
                                            <Slider
                                                value={[waterRequirement]}
                                                max={100}
                                                step={1}
                                                className="w-full"
                                                onValueChange={(values) =>
                                                    setWaterRequirement(
                                                        values[0]
                                                    )
                                                }
                                            />
                                            <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                                                <span>Low</span>
                                                <span>Medium</span>
                                                <span>High</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="flex items-center justify-between space-x-2">
                                                <Label
                                                    htmlFor="indoor-only"
                                                    className="flex items-center gap-1 text-sm"
                                                >
                                                    <Home className="h-4 w-4" />{" "}
                                                    Indoor Only
                                                </Label>
                                                <Switch
                                                    id="indoor-only"
                                                    checked={indoorOnly}
                                                    onCheckedChange={
                                                        setIndoorOnly
                                                    }
                                                />
                                            </div>

                                            <div className="flex items-center justify-between space-x-2">
                                                <Label
                                                    htmlFor="edible-only"
                                                    className="flex items-center gap-1 text-sm"
                                                >
                                                    <Leaf className="h-4 w-4" />{" "}
                                                    Edible Only
                                                </Label>
                                                <Switch
                                                    id="edible-only"
                                                    checked={edibleOnly}
                                                    onCheckedChange={
                                                        setEdibleOnly
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <Label className="mb-2 block">
                                                Plant Type
                                            </Label>
                                            <div className="flex flex-wrap gap-2">
                                                {[
                                                    "Herb",
                                                    "Vegetable",
                                                    "Fruit",
                                                    "Flower",
                                                    "Succulent",
                                                ].map((type) => (
                                                    <Badge
                                                        key={type}
                                                        variant="outline"
                                                        className={`cursor-pointer ${
                                                            selectedTypes.includes(
                                                                type as PlantType
                                                            )
                                                                ? "bg-primary/10 border-primary/30"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            toggleType(
                                                                type as PlantType
                                                            )
                                                        }
                                                    >
                                                        {type}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex justify-between">
                                            <Button
                                                variant="outline"
                                                onClick={toggleFilters}
                                                className="w-1/3"
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                className="w-2/3 ml-2"
                                                onClick={handleApplyFilters}
                                            >
                                                Apply Filters
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Active filters */}
                            {activeFilters.length > 0 && (
                                <div className="px-4 py-2 flex items-center gap-2 overflow-x-auto">
                                    {activeFilters.map((filter) => (
                                        <Badge
                                            key={filter}
                                            variant="outline"
                                            className="bg-primary/10 border-primary/30 flex items-center gap-1"
                                        >
                                            {filter}
                                            <X
                                                className="h-3 w-3 ml-1 cursor-pointer"
                                                onClick={() =>
                                                    removeFilter(filter)
                                                }
                                            />
                                        </Badge>
                                    ))}
                                    {activeFilters.length > 1 && (
                                        <Badge
                                            variant="outline"
                                            className="flex items-center gap-1 text-muted-foreground cursor-pointer"
                                            onClick={clearAllFilters}
                                        >
                                            Clear All
                                        </Badge>
                                    )}
                                </div>
                            )}

                            {/* Bottom action */}
                            {selectedPlant && (
                                <div className="p-4 border-t bg-background mt-auto">
                                    <Button
                                        className="w-full"
                                        onClick={handleSelectThisPlant}
                                    >
                                        Select This Plant
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
