import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CompanyLogos } from '@/components/company-logos'

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-surface-white">
        <div className="container-default py-24 md:py-32 text-center">
          <Badge variant="accent" className="mb-6">
            Now in Beta — Join 500+ businesses
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold mb-6 text-midnight-ink text-balance tracking-[0.004px] leading-[1.25]">
            The LinkedIn for{' '}
            <span className="text-deep-teal">Businesses</span>
          </h1>
          <p className="text-base md:text-lg text-slate-grille max-w-2xl mx-auto mb-10 text-balance leading-[1.38] tracking-[0.013px]">
            Connect with verified companies, discover investment opportunities,
            and access secure data rooms — all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg">Get Started Free</Button>
            </Link>
            <Link href="/directory">
              <Button size="lg" variant="outline">Browse Directory →</Button>
            </Link>
          </div>
          <p className="text-sm text-stone-whisper mt-4 tracking-[0.014px]">No credit card required</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-fog-gray">
        <div className="container-default py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-electric-blue tracking-[0.006px]">500+</p>
              <p className="text-[0.875rem] text-slate-grille mt-1 tracking-[0.014px]">Businesses Listed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-electric-blue tracking-[0.006px]">150+</p>
              <p className="text-[0.875rem] text-slate-grille mt-1 tracking-[0.014px]">Active Investors</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-electric-blue tracking-[0.006px]">$50M+</p>
              <p className="text-[0.875rem] text-slate-grille mt-1 tracking-[0.014px]">Funding Facilitated</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-electric-blue tracking-[0.006px]">98%</p>
              <p className="text-[0.875rem] text-slate-grille mt-1 tracking-[0.014px]">Verification Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <CompanyLogos />

      {/* Features */}
      <section id="features" className="section-spacing bg-surface-white">
        <div className="container-default">
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">Why BizRing?</Badge>
            <h2 className="text-3xl md:text-[2.25rem] font-semibold mb-4 text-midnight-ink tracking-[0.006px]">
              Everything you need to grow
            </h2>
            <p className="text-slate-grille max-w-2xl mx-auto leading-[1.38] tracking-[0.013px]">
              The trusted platform for B2B networking, investment discovery, and secure deal-making.
            </p>
          </div>

          <div className="grid gap-0 md:grid-cols-3">
            <Card padding="lg" className="text-center">
              <div className="w-12 h-12 bg-sky-mist rounded-sm flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-deep-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5M9 10.5h1.5M9 14.25h1.5M12 6.75h1.5M12 10.5h1.5M12 14.25h1.5M15 6.75h1.5M15 10.5h1.5M15 14.25h1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-midnight-ink">For Businesses</h3>
              <p className="text-slate-grille leading-[1.38] tracking-[0.013px]">
                Showcase your company profile, get verified, and connect with serious investors looking for opportunities like yours.
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-12 h-12 bg-pale-mint rounded-sm flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-deep-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-midnight-ink">For Investors</h3>
              <p className="text-slate-grille leading-[1.38] tracking-[0.013px]">
                Discover vetted investment opportunities, review data rooms, and make informed decisions with verified business data.
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-12 h-12 bg-warm-mist rounded-sm flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-deep-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-midnight-ink">Secure & Verified</h3>
              <p className="text-slate-grille leading-[1.38] tracking-[0.013px]">
                All businesses go through our rigorous verification process. Secure data rooms protect sensitive documents.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-spacing bg-fog-gray">
        <div className="container-default">
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-[2.25rem] font-semibold mb-4 text-midnight-ink tracking-[0.006px]">
              Get started in 3 simple steps
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-midnight-ink text-surface-white rounded-full flex items-center justify-center mx-auto mb-5 text-lg font-semibold">1</div>
              <h3 className="text-lg font-semibold mb-2 text-midnight-ink">Create Profile</h3>
              <p className="text-slate-grille leading-[1.38] tracking-[0.013px]">Sign up and create your business or investor profile in minutes.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-midnight-ink text-surface-white rounded-full flex items-center justify-center mx-auto mb-5 text-lg font-semibold">2</div>
              <h3 className="text-lg font-semibold mb-2 text-midnight-ink">Get Verified</h3>
              <p className="text-slate-grille leading-[1.38] tracking-[0.013px]">Complete our verification process to build trust with the community.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-midnight-ink text-surface-white rounded-full flex items-center justify-center mx-auto mb-5 text-lg font-semibold">3</div>
              <h3 className="text-lg font-semibold mb-2 text-midnight-ink">Connect & Grow</h3>
              <p className="text-slate-grille leading-[1.38] tracking-[0.013px]">Network with businesses, access data rooms, and close deals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-surface-white">
        <div className="container-default text-center">
          <div className="bg-midnight-ink p-12 md:p-16">
            <h2 className="text-3xl md:text-[2.25rem] font-semibold text-surface-white mb-4 tracking-[0.006px]">
              Ready to grow your business?
            </h2>
            <p className="text-lg text-ash-cloud mb-8 max-w-xl mx-auto leading-[1.38] tracking-[0.013px]">
              Join hundreds of businesses already on BizRing. Start for free today.
            </p>
            <Link href="/register">
              <Button size="lg" variant="outline">
                Create Free Account →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
