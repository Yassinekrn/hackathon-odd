"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    ArrowLeft,
    Calendar,
    CheckCircle2,
    ChevronDown,
    Clock,
    Droplet,
    Leaf,
    Sun,
    Thermometer,
    Zap,
    Sparkles,
} from "lucide-react";

export function GrowthPlanScreen() {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [showPlanDetails, setShowPlanDetails] = useState(false);
    const [isGeneratingAiPlan, setIsGeneratingAiPlan] = useState(false);

    const plans = [
        {
            id: "beginner",
            name: "Beginner Plan",
            description: "Simple care routine for new gardeners",
            duration: "3 months",
            difficulty: "Easy",
            features: [
                "Basic watering schedule",
                "Simple light management",
                "Minimal maintenance",
            ],
        },
        {
            id: "optimal",
            name: "Optimal Growth",
            description: "Balanced plan for healthy, productive plants",
            duration: "4 months",
            difficulty: "Medium",
            features: [
                "Optimized watering",
                "Fertilization schedule",
                "Pruning guidance",
            ],
        },
        {
            id: "expert",
            name: "Expert Cultivation",
            description: "Advanced techniques for maximum yield",
            duration: "5 months",
            difficulty: "Hard",
            features: [
                "Precision watering",
                "Advanced nutrient management",
                "Strategic pruning",
            ],
        },
    ];

    const handleSelectPlan = (id: string) => {
        setSelectedPlan(id);
    };

    const handleShowDetails = () => {
        setShowPlanDetails(true);
    };

    const handleGenerateAiPlan = () => {
        setIsGeneratingAiPlan(true);
        // Simulate AI plan generation
        setTimeout(() => {
            setIsGeneratingAiPlan(false);
            setSelectedPlan("ai");
        }, 1500);
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
                                        Growth Plan
                                    </h1>
                                </div>
                            </div>

                            {!showPlanDetails ? (
                                /* Plan selection view */
                                <div className="flex-1 p-4 overflow-y-auto">
                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-2">
                                            <h2 className="text-lg font-medium">
                                                Select a Growth Plan
                                            </h2>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Choose the best plan for your basil
                                            plant based on your experience and
                                            goals.
                                        </p>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        {plans.map((plan) => (
                                            <Card
                                                key={plan.id}
                                                className={`cursor-pointer transition-all overflow-hidden ${
                                                    selectedPlan === plan.id
                                                        ? "ring-2 ring-primary"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    handleSelectPlan(plan.id)
                                                }
                                            >
                                                <CardContent className="p-4">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h3 className="font-medium">
                                                                {plan.name}
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                {
                                                                    plan.description
                                                                }
                                                            </p>
                                                        </div>
                                                        <Badge
                                                            variant="outline"
                                                            className={`${
                                                                plan.difficulty ===
                                                                "Easy"
                                                                    ? "bg-success/10 text-success"
                                                                    : plan.difficulty ===
                                                                      "Medium"
                                                                    ? "bg-warning/10 text-warning"
                                                                    : "bg-destructive/10 text-destructive"
                                                            }`}
                                                        >
                                                            {plan.difficulty}
                                                        </Badge>
                                                    </div>

                                                    <div className="mt-3 flex items-center gap-3 text-sm">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="h-4 w-4 text-primary" />
                                                            <span>
                                                                {plan.duration}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="h-4 w-4 text-primary" />
                                                            <span>
                                                                {plan.id ===
                                                                "beginner"
                                                                    ? "5 min/week"
                                                                    : plan.id ===
                                                                      "optimal"
                                                                    ? "15 min/week"
                                                                    : "30 min/week"}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="mt-3">
                                                        <h4 className="text-sm font-medium mb-2">
                                                            Features:
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {plan.features.map(
                                                                (
                                                                    feature,
                                                                    index
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="text-sm flex items-start gap-2"
                                                                    >
                                                                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                                                        <span>
                                                                            {
                                                                                feature
                                                                            }
                                                                        </span>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}

                                        {selectedPlan === "ai" && (
                                            <Card className="ring-2 ring-primary">
                                                <CardContent className="p-4">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h3 className="font-medium flex items-center gap-1">
                                                                <Sparkles className="h-4 w-4" />{" "}
                                                                AI-Generated
                                                                Plan
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                Personalized
                                                                plan based on
                                                                your location
                                                                and plant needs
                                                            </p>
                                                        </div>
                                                        <Badge
                                                            variant="outline"
                                                            className="bg-primary/10 text-primary"
                                                        >
                                                            Custom
                                                        </Badge>
                                                    </div>

                                                    <div className="mt-3 flex items-center gap-3 text-sm">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="h-4 w-4 text-primary" />
                                                            <span>
                                                                4 months
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="h-4 w-4 text-primary" />
                                                            <span>
                                                                10 min/week
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="mt-3">
                                                        <h4 className="text-sm font-medium mb-2">
                                                            Features:
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            <li className="text-sm flex items-start gap-2">
                                                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                                                <span>
                                                                    Climate-optimized
                                                                    watering
                                                                    schedule
                                                                </span>
                                                            </li>
                                                            <li className="text-sm flex items-start gap-2">
                                                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                                                <span>
                                                                    Seasonal
                                                                    adjustments
                                                                    for Tunisia
                                                                </span>
                                                            </li>
                                                            <li className="text-sm flex items-start gap-2">
                                                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                                                <span>
                                                                    Personalized
                                                                    care
                                                                    reminders
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )}
                                    </div>

                                    <Button
                                        className="w-full"
                                        disabled={!selectedPlan}
                                        onClick={handleShowDetails}
                                    >
                                        View Plan Details
                                    </Button>
                                </div>
                            ) : (
                                /* Plan details view */
                                <div className="flex-1 overflow-hidden flex flex-col">
                                    <div className="p-4 bg-accent/30">
                                        <h2 className="text-lg font-medium mb-1">
                                            {selectedPlan === "ai"
                                                ? "AI-Generated Plan"
                                                : "Optimal Growth Plan"}
                                        </h2>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            {selectedPlan === "ai"
                                                ? "A personalized plan for your basil plant in Tunisia"
                                                : "A balanced plan for your basil plant"}
                                        </p>

                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm">
                                                Progress
                                            </span>
                                            <span className="text-sm font-medium">
                                                Week 2 of 16
                                            </span>
                                        </div>
                                        <Progress
                                            value={12.5}
                                            className="h-2 mb-1"
                                        />

                                        <div className="flex justify-between text-xs text-muted-foreground">
                                            <span>Start</span>
                                            <span>Current</span>
                                            <span>Harvest</span>
                                        </div>
                                    </div>

                                    <Tabs
                                        defaultValue="timeline"
                                        className="flex-1"
                                    >
                                        <TabsList className="grid grid-cols-2 bg-background">
                                            <TabsTrigger value="timeline">
                                                Timeline
                                            </TabsTrigger>
                                            <TabsTrigger value="tasks">
                                                Tasks
                                            </TabsTrigger>
                                        </TabsList>

                                        <TabsContent
                                            value="timeline"
                                            className="flex-1 overflow-y-auto p-4 space-y-4"
                                        >
                                            <div className="space-y-4">
                                                <div className="bg-success/10 border border-success/20 rounded-lg p-3">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h3 className="font-medium flex items-center gap-2">
                                                            <Leaf className="h-4 w-4 text-success" />{" "}
                                                            Week 1-2: Seedling
                                                        </h3>
                                                        <Badge
                                                            variant="outline"
                                                            className="bg-success/10 text-success border-success/20"
                                                        >
                                                            Current
                                                        </Badge>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="flex items-start gap-2">
                                                            <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                <p className="text-sm">
                                                                    Keep soil
                                                                    consistently
                                                                    moist
                                                                </p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    Water when
                                                                    top 1cm of
                                                                    soil feels
                                                                    dry
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-2">
                                                            <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                <p className="text-sm">
                                                                    Provide 6
                                                                    hours of
                                                                    indirect
                                                                    sunlight
                                                                </p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    Morning sun
                                                                    is ideal
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="border rounded-lg p-3">
                                                    <h3 className="font-medium flex items-center gap-2 mb-2">
                                                        <Leaf className="h-4 w-4 text-primary" />{" "}
                                                        Week 3-6: Vegetative
                                                        Growth
                                                    </h3>
                                                    <div className="space-y-2">
                                                        <div className="flex items-start gap-2">
                                                            <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                <p className="text-sm">
                                                                    Begin
                                                                    fertilizing
                                                                    with diluted
                                                                    solution
                                                                </p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    Half-strength,
                                                                    once every
                                                                    two weeks
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-2">
                                                            <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                <p className="text-sm">
                                                                    Pinch tops
                                                                    to encourage
                                                                    bushier
                                                                    growth
                                                                </p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    Remove top
                                                                    set of
                                                                    leaves when
                                                                    plant has
                                                                    3-4 sets
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="border rounded-lg p-3">
                                                    <h3 className="font-medium flex items-center gap-2 mb-2">
                                                        <Leaf className="h-4 w-4 text-primary" />{" "}
                                                        Week 7-12: Mature Growth
                                                    </h3>
                                                    <div className="space-y-2">
                                                        <div className="flex items-start gap-2">
                                                            <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                <p className="text-sm">
                                                                    Begin
                                                                    regular
                                                                    harvesting
                                                                </p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    Take leaves
                                                                    from the
                                                                    top, never
                                                                    more than
                                                                    1/3 of plant
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-2">
                                                            <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                <p className="text-sm">
                                                                    Increase
                                                                    water during
                                                                    hot periods
                                                                </p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    Monitor soil
                                                                    moisture
                                                                    daily in
                                                                    summer
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="border rounded-lg p-3">
                                                    <h3 className="font-medium flex items-center gap-2 mb-2">
                                                        <Leaf className="h-4 w-4 text-primary" />{" "}
                                                        Week 13-16: Peak Harvest
                                                    </h3>
                                                    <div className="space-y-2">
                                                        <div className="flex items-start gap-2">
                                                            <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                <p className="text-sm">
                                                                    Remove
                                                                    flower buds
                                                                    immediately
                                                                </p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    Prevents
                                                                    bitter taste
                                                                    in leaves
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-2">
                                                            <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                <p className="text-sm">
                                                                    Consider
                                                                    propagation
                                                                </p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    Take
                                                                    cuttings to
                                                                    grow new
                                                                    plants
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent
                                            value="tasks"
                                            className="flex-1 overflow-y-auto p-4 space-y-4"
                                        >
                                            <div>
                                                <h3 className="font-medium mb-3">
                                                    This Week's Tasks
                                                </h3>
                                                <div className="space-y-2">
                                                    <Card className="bg-success/10 border-success/20">
                                                        <CardContent className="p-3 flex items-center gap-3">
                                                            <div className="bg-success/20 rounded-full p-2">
                                                                <Droplet className="h-5 w-5 text-success" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-medium">
                                                                    Water Basil
                                                                </h4>
                                                                <p className="text-sm text-muted-foreground">
                                                                    Today - Keep
                                                                    soil moist
                                                                </p>
                                                            </div>
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="border-success/20 text-success"
                                                            >
                                                                Done
                                                            </Button>
                                                        </CardContent>
                                                    </Card>

                                                    <Card>
                                                        <CardContent className="p-3 flex items-center gap-3">
                                                            <div className="bg-accent rounded-full p-2">
                                                                <Sun className="h-5 w-5 text-warning" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-medium">
                                                                    Adjust Light
                                                                </h4>
                                                                <p className="text-sm text-muted-foreground">
                                                                    Tomorrow -
                                                                    Move to
                                                                    brighter
                                                                    spot
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

                                                    <Card>
                                                        <CardContent className="p-3 flex items-center gap-3">
                                                            <div className="bg-accent rounded-full p-2">
                                                                <Thermometer className="h-5 w-5 text-destructive" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-medium">
                                                                    Check
                                                                    Temperature
                                                                </h4>
                                                                <p className="text-sm text-muted-foreground">
                                                                    Friday -
                                                                    Ensure
                                                                    18-24°C
                                                                    range
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

                                            <div>
                                                <h3 className="font-medium mb-3">
                                                    Upcoming Tasks
                                                </h3>
                                                <div className="space-y-2">
                                                    <Card>
                                                        <CardContent className="p-3 flex items-center gap-3">
                                                            <div className="bg-accent rounded-full p-2">
                                                                <Zap className="h-5 w-5 text-primary" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-medium">
                                                                    First
                                                                    Fertilization
                                                                </h4>
                                                                <p className="text-sm text-muted-foreground">
                                                                    Next week -
                                                                    Diluted
                                                                    solution
                                                                </p>
                                                            </div>
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                className="text-muted-foreground"
                                                            >
                                                                <ChevronDown className="h-4 w-4" />
                                                            </Button>
                                                        </CardContent>
                                                    </Card>

                                                    <Card>
                                                        <CardContent className="p-3 flex items-center gap-3">
                                                            <div className="bg-accent rounded-full p-2">
                                                                <Leaf className="h-5 w-5 text-primary" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-medium">
                                                                    First
                                                                    Pruning
                                                                </h4>
                                                                <p className="text-sm text-muted-foreground">
                                                                    Week 3 -
                                                                    Pinch top
                                                                    leaves
                                                                </p>
                                                            </div>
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                className="text-muted-foreground"
                                                            >
                                                                <ChevronDown className="h-4 w-4" />
                                                            </Button>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </div>
                                        </TabsContent>
                                    </Tabs>

                                    <div className="p-4 border-t bg-background">
                                        <Button className="w-full">
                                            Customize Plan
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
