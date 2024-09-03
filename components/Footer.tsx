import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer: React.FC = () => {
	return (
		<footer className="py-8 mx-8 border-t-2 border-gray-300 mt-8">
			<div className="container mx-auto">
				<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
					<div>
						<h4 className="text-lg font-semibold text-[#595959] mb-4">
							Services
						</h4>
						<ul className="font-montserrat text-[#838181]">
							<li>
								<Link href="/contacts">Contacts</Link>
							</li>
							<li>
								<Link href="/faq">FAQ</Link>
							</li>
							<li>
								<Link href="/tutorials">Tutorials Videos</Link>
							</li>
							<li>
								<Link href="/economic-calendar">Economic Calendar</Link>
							</li>
							<li>
								<Link href="/forex-calculator">Forex Calculator</Link>
							</li>
							<li>
								<Link href="/ib-programme">IB Programme</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold text-[#595959] mb-4">
							Offers
						</h4>
						<ul className="font-montserrat text-[#838181]">
							<li>
								<Link href="/offers/20-deposit-bonus">20% Deposit Bonus</Link>
							</li>
							<li>
								<Link href="/offers/golden-rush">Golden Rush</Link>
							</li>
							<li>
								<Link href="/offers/contest">Contest</Link>
							</li>
							<li>
								<Link href="/offers/loyalty-stores">Loyalty Stores</Link>
							</li>
							<li>
								<Link href="/offers/copytrading">Copytrading</Link>
							</li>
							<li>
								<Link href="/offers/seminars-roadtours">
									Seminars & Roadtours
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold text-[#595959] mb-4">
							Legal Information
						</h4>
						<ul className="font-montserrat text-[#838181]">
							<li>
								<Link href="/legal/risk-disclosure">Risk Disclosure</Link>
							</li>
							<li>
								<Link href="/legal/privacy-policy">Privacy Policy</Link>
							</li>
							<li>
								<Link href="/legal/return-policy">Return Policy</Link>
							</li>
							<li>
								<Link href="/legal/language">Language</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold text-[#595959] mb-4">About</h4>
						<ul className="font-montserrat text-[#838181]">
							<li>
								<Link href="/about">About Vestrado</Link>
							</li>
							<li>
								<Link href="/about/privacy-policy">Privacy Policy</Link>
							</li>
							<li>
								<Link href="/about/return-policy">Return Policy</Link>
							</li>
							<li>
								<Link href="/about/language">Language</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold text-[#595959] mb-4">
							Social Media
						</h4>
						<div className="flex space-x-4">
							<Link href="https://www.facebook.com">
								<Facebook
									className="w-6 h-6"
									color="#BFBDBD"
								/>
							</Link>
							<Link href="https://www.instagram.com">
								<Instagram
									className="w-6 h-6"
									color="#BFBDBD"
								/>
							</Link>
							<Link href="https://www.twitter.com">
								<Twitter
									className="w-6 h-6"
									color="#BFBDBD"
								/>
							</Link>
							<Link href="https://www.youtube.com">
								<Youtube
									className="w-6 h-6"
									color="#BFBDBD"
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className="text-sm text-[#838181]">
					<p className="mb-4">
						Risk Warning: Trading Forex and CFDs involves significant risk and
						can result in the loss of your invested capital. You should not
						invest more than you can afford to lose and should ensure that you
						fully understand the risks involved. Trading leveraged products may
						not be suitable for all investors. Before trading, please take into
						consideration your level of experience, investment objectives and
						seek independent financial advice if necessary. Please read our
						legal documents and ensure that you fully understand the risks
						before you make any trading decisions.
					</p>
					<p>
						Restrictions: Vestrado Ltd are unable to service clients under
						certain jurisdictions from the following countries: Japan,
						Afghanistan, Australia, Albania, Belarus, Canada, Central African
						Republic, China, Egypt, Iran, Iraq, Lebanon, Libya, Japan, Myanmar,
						North Korea, Russia, Spain, Sudan, Syria, Tunisia, Ukraine, United
						States of America, United States Virgin Islands, Venezuela, and some
						other regions.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
