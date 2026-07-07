import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { User, Mail, Phone, MapPin, Briefcase, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  
  // Local state for editing
  const [formData, setFormData] = useState({
    name: user?.name || '',
    mobile: user?.mobile || '',
    age: user?.age || '',
    state: user?.state || '',
    district: user?.district || '',
    disabilityType: user?.disabilityType || '',
    employmentStatus: user?.employmentStatus || '',
    annualIncome: user?.annualIncome || ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your information has been successfully saved.",
    });
  };

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold">My Profile</h1>
          <p className="text-muted-foreground mt-1">Manage your personal information and preferences.</p>
        </div>
        <Button 
          variant={isEditing ? "default" : "outline"}
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Left Column - Summary Card */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm">
            <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
              {user.name.charAt(0)}
            </div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-muted-foreground text-sm mb-4">{user.email}</p>
            
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${user.hasUdid === 'Yes' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
              {user.hasUdid === 'Yes' ? <CheckCircle2 className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
              UDID: {user.hasUdid === 'Yes' ? 'Verified' : 'Pending'}
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Basic Info */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-border pb-3">
              <User className="h-5 w-5 text-primary" /> Basic Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              <div className="space-y-1">
                <Label>Full Name</Label>
                {isEditing ? (
                  <Input value={formData.name} onChange={e => handleChange('name', e.target.value)} />
                ) : (
                  <p className="font-medium text-foreground">{user.name}</p>
                )}
              </div>
              <div className="space-y-1">
                <Label>Email</Label>
                <p className="font-medium text-muted-foreground">{user.email} <span className="text-xs ml-2 italic">(Cannot change)</span></p>
              </div>
              <div className="space-y-1">
                <Label>Mobile</Label>
                {isEditing ? (
                  <Input value={formData.mobile} onChange={e => handleChange('mobile', e.target.value)} />
                ) : (
                  <p className="font-medium text-foreground">{user.mobile || '-'}</p>
                )}
              </div>
              <div className="space-y-1">
                <Label>Age</Label>
                {isEditing ? (
                  <Input type="number" value={formData.age} onChange={e => handleChange('age', e.target.value)} />
                ) : (
                  <p className="font-medium text-foreground">{user.age || '-'} Years</p>
                )}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-border pb-3">
              <MapPin className="h-5 w-5 text-primary" /> Location Details
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              <div className="space-y-1">
                <Label>State</Label>
                {isEditing ? (
                  <Input value={formData.state} onChange={e => handleChange('state', e.target.value)} />
                ) : (
                  <p className="font-medium text-foreground">{user.state || '-'}</p>
                )}
              </div>
              <div className="space-y-1">
                <Label>District</Label>
                {isEditing ? (
                  <Input value={formData.district} onChange={e => handleChange('district', e.target.value)} />
                ) : (
                  <p className="font-medium text-foreground">{user.district || '-'}</p>
                )}
              </div>
            </div>
          </div>

          {/* Disability Profile */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-border pb-3">
              <FileText className="h-5 w-5 text-primary" /> Medical & Socio-Economic Profile
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              <div className="space-y-1">
                <Label>Disability Type</Label>
                {isEditing ? (
                  <Select value={formData.disabilityType} onValueChange={v => handleChange('disabilityType', v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Locomotor">Locomotor Disability</SelectItem>
                      <SelectItem value="Visual">Visual Impairment</SelectItem>
                      <SelectItem value="Hearing">Hearing Impairment</SelectItem>
                      <SelectItem value="Intellectual">Intellectual Disability</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <p className="font-medium text-foreground">{user.disabilityType || '-'}</p>
                )}
              </div>
              <div className="space-y-1">
                <Label>Employment Status</Label>
                {isEditing ? (
                  <Select value={formData.employmentStatus} onValueChange={v => handleChange('employmentStatus', v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Student">Student</SelectItem>
                      <SelectItem value="Employed">Employed</SelectItem>
                      <SelectItem value="Unemployed">Unemployed</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <p className="font-medium text-foreground">{user.employmentStatus || '-'}</p>
                )}
              </div>
              <div className="space-y-1">
                <Label>Annual Income</Label>
                {isEditing ? (
                  <Select value={formData.annualIncome} onValueChange={v => handleChange('annualIncome', v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Below 1L">Below ₹1 Lakh</SelectItem>
                      <SelectItem value="1-3L">₹1 Lakh - ₹3 Lakhs</SelectItem>
                      <SelectItem value="3-5L">₹3 Lakhs - ₹5 Lakhs</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <p className="font-medium text-foreground">{user.annualIncome || '-'}</p>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
