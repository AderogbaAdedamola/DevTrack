

export default function Footer(){
    return(
        <footer className="border-t border-slate-200 dark:border-[#30363d] py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
            <div className="col-span-2">
                <span className="text-2xl font-black tracking-tighter mb-6 block">VORA</span>
                <p className="text-slate-500 max-w-xs">Dev-centric project management. Built for speed, fueled by intelligence.</p>
            </div>
            <div>
                <h5 className="font-bold mb-4">Product</h5>
                <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600">Features</a></li>
                <li><a href="#" className="hover:text-blue-600">Integrations</a></li>
                <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold mb-4">Company</h5>
                <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600">About</a></li>
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
                </ul>
            </div>
            </div>
        </footer>
    )
}