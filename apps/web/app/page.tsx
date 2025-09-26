import Link from 'next/link';

const navigation = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/calls/new', label: 'New Call' },
  { href: '/settings', label: 'Settings' }
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-12 px-6 py-16">
      <section className="space-y-6">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          Sales Call Recorder
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Record, transcribe, and understand every sales conversation.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          A consent-first platform for German sales teams. Upload recordings or connect your dialer,
          receive live transcripts, and let our AI extract the details that matter.
        </p>
        <div className="flex flex-wrap gap-3">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Compliance built-in</h2>
          <p className="mt-2 text-sm text-slate-600">
            Consent workflows, withdrawal tracking, and audit logs are first-class citizens. Every
            recording is easy to delete or redact when requested.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Actionable insights</h2>
          <p className="mt-2 text-sm text-slate-600">
            Track appointments, objections, and conversion rates in a single manager dashboard.
            Export structured CSV data to sync with your CRM.
          </p>
        </div>
      </section>
    </main>
  );
}
