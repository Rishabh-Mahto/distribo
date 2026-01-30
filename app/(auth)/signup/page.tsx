'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Mail, Lock, User, Building2, ArrowRight } from 'lucide-react'

export default function SignupPage() {
  const [role, setRole] = useState<'brand' | 'seller'>('seller')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-6 pt-5">
      <Card className="border-border w-[500px]">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription>Join Distribo and start earning today</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Role Selection */}
          <div className="space-y-3">
            <Label className="text-foreground text-base font-semibold">What's your role?</Label>
            <RadioGroup value={role} onValueChange={(value) => setRole(value as 'brand' | 'seller')}>
              <div className="flex items-center space-x-2 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted transition"
                onClick={() => setRole('seller')}>
                <RadioGroupItem value="seller" id="seller" />
                <label htmlFor="seller" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-700" />
                    <div>
                      <div className="font-medium text-foreground">Seller / Affiliate</div>
                      <div className="text-sm text-muted-foreground">Generate links and earn commissions</div>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex items-center space-x-2 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted transition"
                onClick={() => setRole('brand')}>
                <RadioGroupItem value="brand" id="brand" />
                <label htmlFor="brand" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-700" />
                    <div>
                      <div className="font-medium text-foreground">Brand</div>
                      <div className="text-sm text-muted-foreground">Manage products and affiliate network</div>
                    </div>
                  </div>
                </label>
              </div>
            </RadioGroup>
          </div>

          {/* Form Fields */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 bg-input border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-input border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-input border-border"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              At least 8 characters, with uppercase and numbers
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="rounded border-border" />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              I agree to the{' '}
              <Link href="#" className="text-gray-700 font-semibold hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="#" className="text-gray-700 font-semibold hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button className="w-full" size="lg">
            Create Account
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            Sign up with Google
          </Button>
        </CardContent>
      </Card>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link href="/login" className="text-gray-700 font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}
