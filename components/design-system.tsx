import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Camera,
  Home,
  Leaf,
  Bell,
  Plus,
  ShoppingBag,
  Calendar,
  BarChart,
  Check,
  AlertTriangle,
  AlertCircle,
} from "lucide-react"

export function DesignSystem() {
  return (
    <div className="space-y-8">
      {/* Color Palette */}
      <Card>
        <CardHeader>
          <CardTitle>Color Palette</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-md bg-primary"></div>
              <span className="mt-2 text-sm">Primary</span>
              <span className="text-xs text-muted-foreground">#6A994E</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-md bg-secondary"></div>
              <span className="mt-2 text-sm">Secondary</span>
              <span className="text-xs text-muted-foreground">#A7C957</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-md bg-accent"></div>
              <span className="mt-2 text-sm">Accent</span>
              <span className="text-xs text-muted-foreground">#F2E8CF</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-md bg-background"></div>
              <span className="mt-2 text-sm">Background</span>
              <span className="text-xs text-muted-foreground">#FFFFFF</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-md bg-success"></div>
              <span className="mt-2 text-sm">Success</span>
              <span className="text-xs text-muted-foreground">#4CAF50</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-md bg-warning"></div>
              <span className="mt-2 text-sm">Warning</span>
              <span className="text-xs text-muted-foreground">#FFC107</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-md bg-destructive"></div>
              <span className="mt-2 text-sm">Error</span>
              <span className="text-xs text-muted-foreground">#E53935</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card>
        <CardHeader>
          <CardTitle>Typography</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold">Heading 1 (24px+)</h1>
            <p className="text-sm text-muted-foreground">Used for main screen titles</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Heading 2</h2>
            <p className="text-sm text-muted-foreground">Used for section headers</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Heading 3</h3>
            <p className="text-sm text-muted-foreground">Used for card titles</p>
          </div>
          <div>
            <p className="text-lg">Body Text (18px+)</p>
            <p className="text-sm text-muted-foreground">Used for main content</p>
          </div>
          <div>
            <p className="text-sm">Small Text</p>
            <p className="text-sm text-muted-foreground">Used for secondary information</p>
          </div>
        </CardContent>
      </Card>

      {/* Buttons & Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Buttons & Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button size="lg" className="w-full h-11">
                Primary
              </Button>
              <span className="text-xs text-muted-foreground">Primary Action</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="lg" variant="secondary" className="w-full h-11">
                Secondary
              </Button>
              <span className="text-xs text-muted-foreground">Secondary Action</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="lg" variant="outline" className="w-full h-11">
                Outline
              </Button>
              <span className="text-xs text-muted-foreground">Tertiary Action</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="icon" className="w-11 h-11 rounded-full">
                <Plus className="h-6 w-6" />
              </Button>
              <span className="text-xs text-muted-foreground">Floating Action</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Icons */}
      <Card>
        <CardHeader>
          <CardTitle>Iconography</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-md bg-accent flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <span className="mt-2 text-xs">Plant</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-md bg-accent flex items-center justify-center">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <span className="mt-2 text-xs">Camera</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-md bg-accent flex items-center justify-center">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <span className="mt-2 text-xs">Home</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-md bg-accent flex items-center justify-center">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <span className="mt-2 text-xs">Reminder</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-md bg-accent flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <span className="mt-2 text-xs">Calendar</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-md bg-accent flex items-center justify-center">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <span className="mt-2 text-xs">Chart</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-md bg-accent flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <span className="mt-2 text-xs">Market</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-md bg-accent flex items-center justify-center">
                <Plus className="h-6 w-6 text-primary" />
              </div>
              <span className="mt-2 text-xs">Add</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status Indicators */}
      <Card>
        <CardHeader>
          <CardTitle>Status Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Badge variant="default" className="bg-success text-white flex items-center gap-1 px-3 py-1 text-sm">
              <Check className="h-4 w-4" /> Healthy
            </Badge>
            <Badge variant="default" className="bg-warning text-black flex items-center gap-1 px-3 py-1 text-sm">
              <AlertTriangle className="h-4 w-4" /> Needs Water
            </Badge>
            <Badge variant="default" className="bg-destructive flex items-center gap-1 px-3 py-1 text-sm">
              <AlertCircle className="h-4 w-4" /> Pest Detected
            </Badge>
            <Badge variant="outline" className="border-primary text-primary">
              Indoor
            </Badge>
            <Badge variant="outline" className="border-secondary text-secondary">
              Edible
            </Badge>
            <Badge variant="outline" className="border-muted-foreground">
              Small
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
