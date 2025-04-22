import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Droplet,
  Sun,
  Thermometer,
  Clock,
  BarChart,
  Camera,
  Share2,
  Heart,
  Info,
  Leaf,
  AlertTriangle,
  Wind,
  Sparkles,
  Lightbulb,
} from "lucide-react"

export function PlantDetailsScreen() {
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
              {/* Plant image header */}
              <div className="relative h-48">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Basil+Plant"
                  alt="Basil plant"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Back button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 left-2 text-white bg-black/20 hover:bg-black/30"
                  aria-label="Go back"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>

                {/* Action buttons */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white bg-black/20 hover:bg-black/30"
                    aria-label="Share plant"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white bg-black/20 hover:bg-black/30"
                    aria-label="Favorite plant"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>

                {/* Plant name */}
                <div className="absolute bottom-4 left-4">
                  <h1 className="text-2xl font-bold text-white mb-1">Basil</h1>
                  <div className="flex gap-2">
                    <Badge className="bg-primary/80">Herb</Badge>
                    <Badge className="bg-secondary/80">Edible</Badge>
                    <Badge className="bg-accent text-primary">Indoor</Badge>
                  </div>
                </div>
              </div>

              {/* Plant status */}
              <div className="p-4 bg-accent/30 flex justify-between">
                <div className="flex flex-col items-center">
                  <Droplet className="h-5 w-5 text-primary mb-1" />
                  <span className="text-xs text-muted-foreground">Water</span>
                  <span className="text-sm font-medium">Medium</span>
                </div>
                <div className="flex flex-col items-center">
                  <Sun className="h-5 w-5 text-warning mb-1" />
                  <span className="text-xs text-muted-foreground">Light</span>
                  <span className="text-sm font-medium">Medium</span>
                </div>
                <div className="flex flex-col items-center">
                  <Wind className="h-5 w-5 text-primary mb-1" />
                  <span className="text-xs text-muted-foreground">Wind</span>
                  <span className="text-sm font-medium">Low</span>
                </div>
                <div className="flex flex-col items-center">
                  <Thermometer className="h-5 w-5 text-destructive mb-1" />
                  <span className="text-xs text-muted-foreground">Temp</span>
                  <span className="text-sm font-medium">18-24°C</span>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="care" className="flex-1">
                <TabsList className="grid grid-cols-3 bg-background">
                  <TabsTrigger value="care">Care</TabsTrigger>
                  <TabsTrigger value="growth">Growth</TabsTrigger>
                  <TabsTrigger value="info">Info</TabsTrigger>
                </TabsList>

                {/* Care tab */}
                <TabsContent value="care" className="p-4 space-y-4">
                  {/* AI Care Schedule */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" /> Care Schedule
                      </h3>
                      <Button size="sm" variant="outline" className="h-8 gap-1">
                        <Sparkles className="h-4 w-4" /> Generate with AI
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-accent/50 rounded-md">
                        <span className="text-sm">Water</span>
                        <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                          Every 2-3 days
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-accent/50 rounded-md">
                        <span className="text-sm">Fertilize</span>
                        <Badge variant="outline" className="bg-muted/50 border-muted/20">
                          Every 2 weeks
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-accent/50 rounded-md">
                        <span className="text-sm">Prune</span>
                        <Badge variant="outline" className="bg-muted/50 border-muted/20">
                          Monthly
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* AI Recommendations */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-warning" /> AI Recommendations
                      </h3>
                      <Button size="sm" variant="outline" className="h-8 gap-1">
                        <Sparkles className="h-4 w-4" /> Get Tips
                      </Button>
                    </div>

                    <div className="bg-accent/30 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Click the button above to get AI-generated care tips and recommendations for your basil plant.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium flex items-center gap-2">
                        <Sun className="h-4 w-4 text-warning" /> Sunlight
                      </h3>
                      <span className="text-sm text-muted-foreground">6-8 hours daily</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        Morning
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7 bg-primary/10">
                        Afternoon
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        Evening
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Growth tab */}
                <TabsContent value="growth" className="p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Growth Progress</h3>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <BarChart className="h-4 w-4" /> History
                    </Button>
                  </div>

                  <div className="bg-accent/30 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm">45 days old</span>
                    </div>
                    <Progress value={60} className="h-2 mb-1" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Seedling</span>
                      <span>Growing</span>
                      <span>Mature</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium mb-2">Growth Timeline</h3>

                    <div className="relative pl-6 pb-6 border-l-2 border-primary/30">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                      <div className="mb-1">
                        <span className="text-sm font-medium">Seedling Stage</span>
                        <span className="text-xs text-muted-foreground ml-2">Day 1-15</span>
                      </div>
                      <p className="text-sm text-muted-foreground">First leaves appeared, plant established</p>
                    </div>

                    <div className="relative pl-6 pb-6 border-l-2 border-primary/30">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                      <div className="mb-1">
                        <span className="text-sm font-medium">Vegetative Stage</span>
                        <span className="text-xs text-muted-foreground ml-2">Day 16-45</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Plant growing rapidly, developing foliage</p>
                    </div>

                    <div className="relative pl-6 pb-6 border-l-2 border-muted/30">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-muted"></div>
                      <div className="mb-1">
                        <span className="text-sm font-medium">Mature Stage</span>
                        <span className="text-xs text-muted-foreground ml-2">Day 46-90</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Ready for regular harvesting</p>
                    </div>
                  </div>

                  <Button className="w-full gap-2">
                    <Camera className="h-4 w-4" /> Track Growth with Photo
                  </Button>
                </TabsContent>

                {/* Info tab */}
                <TabsContent value="info" className="p-4 space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <Info className="h-4 w-4 text-primary" /> About Basil
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Basil is a fragrant herb with a distinctive sweet, slightly peppery flavor. It's widely used in
                        Mediterranean and Asian cuisines, especially in Italian dishes.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-accent/30 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-1">Scientific Name</h4>
                        <p className="text-sm text-muted-foreground">Ocimum basilicum</p>
                      </div>
                      <div className="bg-accent/30 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-1">Plant Family</h4>
                        <p className="text-sm text-muted-foreground">Lamiaceae (Mint)</p>
                      </div>
                      <div className="bg-accent/30 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-1">Origin</h4>
                        <p className="text-sm text-muted-foreground">India, Asia</p>
                      </div>
                      <div className="bg-accent/30 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-1">Lifecycle</h4>
                        <p className="text-sm text-muted-foreground">Annual</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <Leaf className="h-4 w-4 text-primary" /> Growing Tips
                      </h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            1
                          </span>
                          <span>Pinch off flower buds to encourage leaf growth</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            2
                          </span>
                          <span>Harvest from the top to promote bushier growth</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            3
                          </span>
                          <span>Keep soil consistently moist but not waterlogged</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-warning" /> Common Issues
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 p-2 bg-warning/10 rounded-md">
                          <AlertTriangle className="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-sm font-medium">Yellowing Leaves</span>
                            <p className="text-xs text-muted-foreground">Usually indicates overwatering</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 p-2 bg-muted/20 rounded-md">
                          <AlertTriangle className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-sm font-medium">Wilting</span>
                            <p className="text-xs text-muted-foreground">Sign of underwatering or heat stress</p>
                          </div>
                        </div>
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
  )
}
