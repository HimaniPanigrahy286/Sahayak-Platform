import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Building2, UploadCloud, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir"
];

const DISABILITY_TYPES = [
  "Visual Impairment", "Hearing Impairment", "Locomotor Disability", "Mental Illness", 
  "Intellectual Disability", "Autism Spectrum Disorder", "Cerebral Palsy", "Multiple Disabilities", "Others"
];

export default function Register() {
  const [step, setStep] = useState(1);
  const [, setLocation] = useLocation();
  const { register } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    // Step 1
    name: '', email: '', mobile: '', password: '', confirmPassword: '',
    // Step 2
    age: '', gender: '', state: '', district: '', region: 'Urban', address: '', pincode: '',
    // Step 3
    disabilityType: '', disabilityPercentage: '', hasUdid: 'No', udidNumber: '',
    // Step 4
    employmentStatus: '', educationLevel: '', annualIncome: '', occupation: '', preferredLanguage: '', hasBankAccount: 'Yes'
  });

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    // Basic validation per step
    if (step === 1 && (!formData.name || !formData.email || !formData.password)) {
      toast({ title: "Required Fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    if (step === 1 && formData.password !== formData.confirmPassword) {
      toast({ title: "Password Mismatch", description: "Passwords do not match.", variant: "destructive" });
      return;
    }
    window.scrollTo(0, 0);
    setStep(s => Math.min(s + 1, 5));
  };

  const prevStep = () => {
    window.scrollTo(0, 0);
    setStep(s => Math.max(s - 1, 1));
  };

  const handleSubmit = async () => {
    await register(formData);
    toast({
      title: "Registration Successful",
      description: "Welcome to Sahayak!",
    });
    setLocation('/dashboard');
  };

  // Step Components
  const Step1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif font-bold text-foreground">Basic Information</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
          <Input id="name" value={formData.name} onChange={e => updateForm('name', e.target.value)} placeholder="As per official documents" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
            <Input id="email" type="email" value={formData.email} onChange={e => updateForm('email', e.target.value)} placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number <span className="text-destructive">*</span></Label>
            <Input id="mobile" type="tel" value={formData.mobile} onChange={e => updateForm('mobile', e.target.value)} placeholder="10-digit mobile number" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="password">Password <span className="text-destructive">*</span></Label>
            <Input id="password" type="password" value={formData.password} onChange={e => updateForm('password', e.target.value)} placeholder="Min. 8 characters" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password <span className="text-destructive">*</span></Label>
            <Input id="confirmPassword" type="password" value={formData.confirmPassword} onChange={e => updateForm('confirmPassword', e.target.value)} placeholder="Confirm password" />
          </div>
        </div>
      </div>
    </div>
  );

  const Step2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif font-bold text-foreground">Personal Details</h2>
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" min="1" max="120" value={formData.age} onChange={e => updateForm('age', e.target.value)} placeholder="Years" />
          </div>
          <div className="space-y-2">
            <Label>Gender</Label>
            <Select value={formData.gender} onValueChange={v => updateForm('gender', v)}>
              <SelectTrigger><SelectValue placeholder="Select Gender" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Transgender">Transgender</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-3">
          <Label>Region Type</Label>
          <RadioGroup defaultValue={formData.region} onValueChange={v => updateForm('region', v)} className="flex gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Urban" id="urban" />
              <Label htmlFor="urban" className="font-normal cursor-pointer">Urban (City/Town)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Rural" id="rural" />
              <Label htmlFor="rural" className="font-normal cursor-pointer">Rural (Village)</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>State</Label>
            <Select value={formData.state} onValueChange={v => updateForm('state', v)}>
              <SelectTrigger><SelectValue placeholder="Select State" /></SelectTrigger>
              <SelectContent>
                {INDIAN_STATES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="district">District</Label>
            <Input id="district" value={formData.district} onChange={e => updateForm('district', e.target.value)} placeholder="Your district" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Full Address</Label>
          <Textarea id="address" value={formData.address} onChange={e => updateForm('address', e.target.value)} placeholder="House/Flat No., Street, Landmark" rows={3} />
        </div>
        
        <div className="w-1/2 pr-2 space-y-2">
          <Label htmlFor="pincode">PIN Code</Label>
          <Input id="pincode" type="text" maxLength={6} value={formData.pincode} onChange={e => updateForm('pincode', e.target.value)} placeholder="6-digit PIN" />
        </div>
      </div>
    </div>
  );

  const Step3 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif font-bold text-foreground">Disability Information</h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Type of Disability</Label>
          <Select value={formData.disabilityType} onValueChange={v => updateForm('disabilityType', v)}>
            <SelectTrigger><SelectValue placeholder="Select Primary Disability" /></SelectTrigger>
            <SelectContent>
              {DISABILITY_TYPES.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2 w-1/2 pr-2">
          <Label htmlFor="percentage">Disability Percentage (%)</Label>
          <Input id="percentage" type="number" min="0" max="100" value={formData.disabilityPercentage} onChange={e => updateForm('disabilityPercentage', e.target.value)} placeholder="e.g. 40" />
          <p className="text-xs text-muted-foreground">As per your medical certificate</p>
        </div>

        <div className="p-4 bg-muted rounded-xl border border-border space-y-4">
          <div className="space-y-3">
            <Label className="text-base">Do you have a UDID Card?</Label>
            <RadioGroup value={formData.hasUdid} onValueChange={v => updateForm('hasUdid', v)} className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Yes" id="udid-yes" />
                <Label htmlFor="udid-yes" className="font-normal cursor-pointer">Yes, I have one</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No" id="udid-no" />
                <Label htmlFor="udid-no" className="font-normal cursor-pointer">No, I don't</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.hasUdid === 'Yes' ? (
            <div className="space-y-4 pt-2 animate-in fade-in slide-in-from-top-2">
              <div className="space-y-2">
                <Label htmlFor="udid-num">UDID Number</Label>
                <Input id="udid-num" value={formData.udidNumber} onChange={e => updateForm('udidNumber', e.target.value)} placeholder="Enter 18-digit UDID Number" />
              </div>
              <Button type="button" variant="outline" className="w-full border-dashed border-2 py-8 text-muted-foreground hover:bg-muted/50">
                <UploadCloud className="mr-2 h-5 w-5" />
                Upload UDID Copy (Optional)
              </Button>
            </div>
          ) : (
            <div className="flex gap-3 bg-secondary/10 text-secondary-foreground p-3 rounded-lg mt-2">
              <Info className="h-5 w-5 shrink-0 text-secondary" />
              <p className="text-sm">No worries! Sahayak will guide you step-by-step on how to obtain your UDID card from the government portal.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const Step4 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif font-bold text-foreground">Socio-Economic Profile</h2>
      <p className="text-sm text-muted-foreground -mt-4">This helps us find financial and educational schemes tailored for you.</p>
      
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Employment Status</Label>
            <Select value={formData.employmentStatus} onValueChange={v => updateForm('employmentStatus', v)}>
              <SelectTrigger><SelectValue placeholder="Select Status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Employed">Employed</SelectItem>
                <SelectItem value="Self-employed">Self-employed</SelectItem>
                <SelectItem value="Unemployed">Unemployed seeking work</SelectItem>
                <SelectItem value="Not in labor force">Not in labor force</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Education Level</Label>
            <Select value={formData.educationLevel} onValueChange={v => updateForm('educationLevel', v)}>
              <SelectTrigger><SelectValue placeholder="Highest Qualification" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Below 10th">Below 10th Standard</SelectItem>
                <SelectItem value="10th Pass">10th Pass</SelectItem>
                <SelectItem value="12th Pass">12th Pass</SelectItem>
                <SelectItem value="Graduate">Graduate / Diploma</SelectItem>
                <SelectItem value="Post Graduate">Post Graduate</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Annual Family Income</Label>
          <Select value={formData.annualIncome} onValueChange={v => updateForm('annualIncome', v)}>
            <SelectTrigger><SelectValue placeholder="Select Income Range" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Below 1L">Below ₹1 Lakh</SelectItem>
              <SelectItem value="1-2.5L">₹1 Lakh - ₹2.5 Lakhs</SelectItem>
              <SelectItem value="2.5-5L">₹2.5 Lakhs - ₹5 Lakhs</SelectItem>
              <SelectItem value="5-8L">₹5 Lakhs - ₹8 Lakhs</SelectItem>
              <SelectItem value="Above 8L">Above ₹8 Lakhs</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Preferred Language for Communication</Label>
          <Select value={formData.preferredLanguage} onValueChange={v => updateForm('preferredLanguage', v)}>
            <SelectTrigger><SelectValue placeholder="Select Language" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Hindi">Hindi (हिंदी)</SelectItem>
              <SelectItem value="Tamil">Tamil (தமிழ்)</SelectItem>
              <SelectItem value="Telugu">Telugu (తెలుగు)</SelectItem>
              <SelectItem value="Marathi">Marathi (मराठी)</SelectItem>
              <SelectItem value="Bengali">Bengali (বাংলা)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-card mt-4">
          <div>
            <Label className="text-base">Do you have a personal bank account?</Label>
            <p className="text-sm text-muted-foreground mt-1">Required for Direct Benefit Transfers (DBT)</p>
          </div>
          <RadioGroup value={formData.hasBankAccount} onValueChange={v => updateForm('hasBankAccount', v)} className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="bank-yes" />
              <Label htmlFor="bank-yes" className="font-normal cursor-pointer">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="bank-no" />
              <Label htmlFor="bank-no" className="font-normal cursor-pointer">No</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );

  const Step5 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif font-bold text-foreground">Review & Submit</h2>
      <p className="text-sm text-muted-foreground -mt-4">Please verify your details before creating your account.</p>
      
      <div className="space-y-4">
        <div className="border border-border rounded-xl overflow-hidden bg-card">
          <div className="bg-muted/50 px-4 py-3 flex justify-between items-center border-b border-border">
            <h3 className="font-bold flex items-center gap-2"><Building2 className="h-4 w-4 text-primary" /> Basic & Personal Info</h3>
            <Button variant="ghost" size="sm" onClick={() => setStep(1)} className="h-8 text-primary">Edit</Button>
          </div>
          <div className="p-4 grid sm:grid-cols-2 gap-y-3 gap-x-4 text-sm">
            <div><span className="text-muted-foreground block mb-1">Name</span><span className="font-medium">{formData.name || '-'}</span></div>
            <div><span className="text-muted-foreground block mb-1">Email</span><span className="font-medium">{formData.email || '-'}</span></div>
            <div><span className="text-muted-foreground block mb-1">Mobile</span><span className="font-medium">{formData.mobile || '-'}</span></div>
            <div><span className="text-muted-foreground block mb-1">Location</span><span className="font-medium">{formData.state ? `${formData.district}, ${formData.state}` : '-'}</span></div>
          </div>
        </div>

        <div className="border border-border rounded-xl overflow-hidden bg-card">
          <div className="bg-muted/50 px-4 py-3 flex justify-between items-center border-b border-border">
            <h3 className="font-bold flex items-center gap-2"><Check className="h-4 w-4 text-secondary" /> Disability Info</h3>
            <Button variant="ghost" size="sm" onClick={() => setStep(3)} className="h-8 text-primary">Edit</Button>
          </div>
          <div className="p-4 grid sm:grid-cols-2 gap-y-3 gap-x-4 text-sm">
            <div><span className="text-muted-foreground block mb-1">Disability Type</span><span className="font-medium">{formData.disabilityType || '-'}</span></div>
            <div><span className="text-muted-foreground block mb-1">Percentage</span><span className="font-medium">{formData.disabilityPercentage ? `${formData.disabilityPercentage}%` : '-'}</span></div>
            <div className="sm:col-span-2"><span className="text-muted-foreground block mb-1">UDID Status</span>
              <span className="font-medium">
                {formData.hasUdid === 'Yes' ? `Available (No. ${formData.udidNumber})` : 'Not Available - Needs Assistance'}
              </span>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-xl overflow-hidden bg-card">
          <div className="bg-muted/50 px-4 py-3 flex justify-between items-center border-b border-border">
            <h3 className="font-bold flex items-center gap-2"><Info className="h-4 w-4 text-accent-foreground" /> Socio-Economic Profile</h3>
            <Button variant="ghost" size="sm" onClick={() => setStep(4)} className="h-8 text-primary">Edit</Button>
          </div>
          <div className="p-4 grid sm:grid-cols-2 gap-y-3 gap-x-4 text-sm">
            <div><span className="text-muted-foreground block mb-1">Education</span><span className="font-medium">{formData.educationLevel || '-'}</span></div>
            <div><span className="text-muted-foreground block mb-1">Employment</span><span className="font-medium">{formData.employmentStatus || '-'}</span></div>
            <div><span className="text-muted-foreground block mb-1">Income</span><span className="font-medium">{formData.annualIncome || '-'}</span></div>
            <div><span className="text-muted-foreground block mb-1">Bank Acc.</span><span className="font-medium">{formData.hasBankAccount}</span></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-muted/20 py-12 px-4">
      <div className="container max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Create Your Profile</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Complete this simple wizard so we can personalize scheme recommendations for you.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between items-center relative z-10 px-2 sm:px-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  step === item ? 'bg-primary text-primary-foreground shadow-md ring-4 ring-primary/20' : 
                  step > item ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground border-2 border-border'
                }`}>
                  {step > item ? <Check className="h-5 w-5" /> : item}
                </div>
                <span className={`text-xs font-medium hidden sm:block ${step >= item ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {item === 1 ? 'Basic' : item === 2 ? 'Personal' : item === 3 ? 'Disability' : item === 4 ? 'Socio' : 'Review'}
                </span>
              </div>
            ))}
            {/* Background Line */}
            <div className="absolute top-5 left-10 right-10 h-1 bg-border -z-10 -translate-y-1/2">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-in-out" 
                style={{ width: `${((step - 1) / 4) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-card border border-border shadow-xl rounded-2xl p-6 sm:p-10 mb-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 1 && <Step1 />}
              {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
              {step === 4 && <Step4 />}
              {step === 5 && <Step5 />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={prevStep} 
            disabled={step === 1}
            className="rounded-full px-6"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          
          {step < 5 ? (
            <Button size="lg" onClick={nextStep} className="rounded-full px-8 shadow-md">
              Next Step <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button size="lg" onClick={handleSubmit} className="rounded-full px-8 shadow-md bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Complete Registration <Check className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

      </div>
    </div>
  );
}
