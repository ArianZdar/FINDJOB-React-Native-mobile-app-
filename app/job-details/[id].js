import React from 'react'
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl} from 'react-native'
import { Stack, useRouter, useLocalSearchParams} from 'expo-router'
import { useState, useCallback } from 'react'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    
    
    const {data, isLoading, error, refetch} = useFetch('job-details', {
        job_id: params.id,
    }); 

    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, []);

    const displayTabContent = () => {
        switch (activeTab){
            case "Qualifications":
                return <Specifics 
                    title="Qualifications"
                    points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
                />
            case "About":
                return <JobAbout 
                    info={data[0].job_description ?? "No data provided"}
                />
            case "Responsibilities":
                return <Specifics 
                    title="Responsibilities"
                    points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
                />
            default:
                break;
        }
    }



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite 
        //Ensures content is visible on all devices
    }}>
        <Stack.Screen options={{ //Specifically designed for navigation configuration
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft:()=>(
                <ScreenHeaderBtn 
                    iconUrl={icons.left}
                    dimension="60%"
                    handlePress={()=> router.back()}
                />
            ),

            headerRight: () => (
                <ScreenHeaderBtn
                    iconUrl={icons.share}
                    dimension="60%"
                    handlePress={() => {}}
                />
            ),
            headerTitle: ""
            }}>
        </Stack.Screen>

        <>
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
            { isLoading ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : data.length === 0 ? (
                <Text>No data found</Text>
            ) : (
                <View style={{padding:SIZES.medium, paddingBottom: 100}}>
                    <Company
                        companyLogo={data[0].employer_logo}
                        jobTitle={data[0].job_title}
                        companyName={data[0].employer_name}
                        location={data[0].job_country}
                    />

                    <JobTabs
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />

                    {displayTabContent()}
                </View>
            )}
            </ScrollView>

            <JobFooter url={data[0]?.job_apply_link ?? "https://careers.google.com/jobs/results"}/>
        </>
    </SafeAreaView>
  )
}

export default JobDetails