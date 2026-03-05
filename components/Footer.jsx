import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {

return (

<footer className="bg-[#2f7fa1] text-white mt-20">

<div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-5 gap-10">


{/* COMPANY */}

<div>

<h3 className="text-xl font-semibold mb-4">
Kanak Drishti Infotech Pvt. Ltd.
</h3>

<p className="text-white/90 text-sm leading-7">
We deliver powerful, scalable DRISHTI MLM software tailored to meet your business requirements with real-time solutions and constant innovation.
</p>

</div>



{/* QUICK LINKS */}

<div>

<h3 className="text-xl font-semibold mb-4">
Quick Links
</h3>

<div className="space-y-2 text-white/90 text-sm">

<p>Home</p>
<p>Demo</p>
<p>Features</p>
<p>Pricing</p>
<p>About</p>
<p>Contact</p>
<p>Blog</p>

</div>

</div>



{/* MLM PLANS */}

<div>

<h3 className="text-xl font-semibold mb-4">
Drishti MLM Plans
</h3>

<div className="space-y-2 text-white/90 text-sm">

<p>Binary Plan</p>
<p>Matrix Plan</p>
<p>Unilevel Plan</p>
<p>Australian Plan</p>

</div>

</div>



{/* SUPPORT */}

<div>

<h3 className="text-xl font-semibold mb-4">
Support
</h3>

<div className="space-y-2 text-white/90 text-sm">

<p>Contact Info</p>
<p>Terms & Conditions</p>
<p>Privacy Policy</p>

</div>

</div>



{/* CONTACT */}

<div>

<h3 className="text-xl font-semibold mb-4">
Contact Info
</h3>

<div className="space-y-3 text-sm">

<div className="flex gap-2">
<MapPin size={16}/>
A-88 Sector 4 Noida India
</div>

<div className="flex gap-2">
<Phone size={16}/>
+91 9911210174
</div>

<div className="flex gap-2">
<Mail size={16}/>
sales@kanakdrishtiinfo.com
</div>

</div>

</div>


</div>



{/* BOTTOM BAR */}

<div className="border-t border-white/30">

<div className="max-w-7xl mx-auto px-6 py-6 flex justify-between text-sm">

<div>
© 2025 . All rights reserved.
</div>

<div>
Designed & Developed by Kanak Drishti Infotech Pvt. Ltd.
</div>

</div>

</div>

</footer>

);
}