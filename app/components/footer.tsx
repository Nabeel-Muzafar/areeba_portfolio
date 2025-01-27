export default function Footer() {
  return (
    <footer className="bg-background shadow-md mt-8">
      <div className="container mx-auto px-6 py-3 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Areeba Nabeel. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

